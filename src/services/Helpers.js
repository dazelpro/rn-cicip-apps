import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (value) => {
    return AsyncStorage.setItem('@token', JSON.stringify(value));
};

const getItem = async () => {
    const value = await AsyncStorage.getItem('@token');
    return value ? JSON.parse(value) : null;
};

const removeItem = async () => {
    return AsyncStorage.removeItem('@token');
};

export {setItem, getItem, removeItem}
