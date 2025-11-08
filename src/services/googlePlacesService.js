import { getCachedDetails, setCachedDetails } from './vetCacheService';

const API_KEY = "AIzaSyAdF6NRC6czSt3vhoz8sH0lGtPd0EIK-lA";

// Buscar detalhes de um local específico
export const fetchPlaceDetails = async (placeId) => {
    const cached = await getCachedDetails(placeId);
    if (cached) return cached;

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry,formatted_address,formatted_phone_number&key=${API_KEY}`;

    try {
        const response = await fetch(detailsUrl);
        const data = await response.json();

        if (data.status === "OK" && data.result) {
            await setCachedDetails(placeId, data.result);
            return data.result;
        }
        return null;
    } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        return null;
    }
};

// Buscar veterinários próximos
export const fetchNearbyVeterinaries = async ({ latitude, longitude }) => {
    const radius = 5000;
    const type = "veterinary_care";
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK" && data.results) {
        const topResults = data.results.slice(0, 15);

        const detailedVets = await Promise.all(
            topResults.map(async (place) => {
                const details = await fetchPlaceDetails(place.place_id);
                if (details) {
                    return {
                        id: place.place_id,
                        name: details.name,
                        address: details.formatted_address || "Endereço não disponível",
                        phone: details.formatted_phone_number || "Telefone não disponível",
                        location: {
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                        },
                    };
                }
                return null;
            })
        );

        return detailedVets.filter(Boolean);
    }

    return [];
};
