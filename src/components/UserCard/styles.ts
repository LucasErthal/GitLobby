import { StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import CustomDimensions from '../../utils/dimensions';
import FontSize from '../../utils/responsiveFontSize';

const colors = new Colors();
const customDimensions = CustomDimensions();

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: customDimensions.windowHeight / 5,
    backgroundColor: colors.blackSecondary,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: colors.purpleSecondary,
    borderWidth: 1,
    marginBottom: 3
  },

  button: {
    width: '100%',
    height: '100%',
    padding: '1%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: customDimensions.windowWidth / 4,
    height: customDimensions.windowWidth / 4,
    borderRadius: customDimensions.windowWidth / 4,
    marginRight: 10
  },

  info: {
    flex: 1,
    height: '100%',

    justifyContent: 'center'
  },

  text: {
    color: 'white',
    fontFamily: 'Nunito_400Regular',
    fontSize: FontSize(14)
  }
});

export default styles;