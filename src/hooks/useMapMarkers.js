import { useEffect, useRef } from 'react';

// Hook customizado para gerenciar markers do mapa
export const useMapMarkers = (userLocation, veterinaries) => {
    const mapRef = useRef(null);
    const markerRefs = useRef([]);

    useEffect(() => {
        if (mapRef.current && userLocation && veterinaries.length > 0) {
            const timer = setTimeout(() => {
                mapRef.current.fitToCoordinates(
                    veterinaries.map((vet) => ({
                        latitude: vet.location.lat,
                        longitude: vet.location.lng,
                    })),
                    {
                        edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
                        animated: true,
                    }
                );

                setTimeout(() => {
                    markerRefs.current.forEach((ref) => {
                        if (ref) ref.showCallout();
                    });
                }, 300);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [userLocation, veterinaries]);

    const handleMarkerRef = (ref, vetId) => {
        if (ref) {
            const index = markerRefs.current.findIndex(r => r?.key === vetId);
            if (index >= 0) {
                markerRefs.current[index] = ref;
            } else {
                markerRefs.current.push(ref);
            }
        }
    };

    return { mapRef, handleMarkerRef };
};
