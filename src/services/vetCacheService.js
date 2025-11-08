import AsyncStorage from "@react-native-async-storage/async-storage";

// Cache em memória para acesso mais rápido
let memoryCache = {};

// Limpar cache antigo do AsyncStorage
export const cleanOldCache = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const vetKeys = keys.filter(key => key.startsWith('vet_'));

        if (vetKeys.length > 20) {
            const keysToRemove = vetKeys.slice(0, vetKeys.length - 15);
            await AsyncStorage.multiRemove(keysToRemove);
        }
    } catch (error) {
        console.warn("Erro ao limpar cache:", error);
    }
};

// Limpar cache de memória (usado no cleanup do componente)
export const cleanMemoryCache = () => {
    const keys = Object.keys(memoryCache);
    if (keys.length > 50) {
        const keysToRemove = keys.slice(0, keys.length - 30);
        keysToRemove.forEach(key => delete memoryCache[key]);
    }
};

// Obter detalhes do cache
export const getCachedDetails = async (placeId) => {
    if (memoryCache[placeId]) {
        return memoryCache[placeId];
    }

    try {
        const cached = await AsyncStorage.getItem(`vet_${placeId}`);
        if (cached) {
            const data = JSON.parse(cached);
            memoryCache[placeId] = data;
            return data;
        }
    } catch (err) {
        console.warn("Erro ao acessar cache", err);
    }
    return null;
};

// Salvar detalhes no cache
export const setCachedDetails = async (placeId, data) => {
    memoryCache[placeId] = data;

    try {
        await AsyncStorage.setItem(`vet_${placeId}`, JSON.stringify(data));
    } catch (err) {
        console.warn("Erro ao salvar cache", err);
    }
};
