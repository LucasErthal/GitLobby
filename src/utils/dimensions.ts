import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const CustomDimensions = () => {

  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
  
  const statusBarHeight = Constants.statusBarHeight;

  return({windowWidth, windowHeight, screenWidth, screenHeight, statusBarHeight})
}

export default CustomDimensions;
