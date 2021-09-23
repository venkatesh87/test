import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
  return await AsyncStorage.getItem(key);
};

export const storeData = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};
