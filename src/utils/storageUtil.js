import AsyncStorage from '@react-native-community/async-storage';

class storageUtil {

  static async set (key, value) {
    try {
      if (typeof value == "object") {
        value = JSON.stringify(value);
      } else {
        value = value.toString();
      }
      return await AsyncStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  static async get (key, callback) {
    try {
      return await AsyncStorage.getItem(key, callback);
    } catch (error) {
      return;
    }
  }

  static async remove (key, callback) {
    try {
      return await AsyncStorage.removeItem(key, callback);
    } catch (error) {
      return;
    }
  }

  static async update (key, value, callback) {
    try {
      if (typeof value == "object") {
        value = JSON.stringify(value);
      } else {
        value = value.toString();
      }
      return await AsyncStorage.mergeItem(key, value, callback);
    } catch (error) {
      return;
    }
  }

}
export default storageUtil;
