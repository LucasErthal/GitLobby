import { StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import CustomDimensions from '../../utils/dimensions';
import FontSize from '../../utils/responsiveFontSize';

const customDimensions = CustomDimensions();
const colors = new Colors();

const styles = StyleSheet.create({
  container: {
    width: customDimensions.windowWidth,
    height: customDimensions.windowHeight,
    backgroundColor: colors.blackPrimary
  },

  card: {
    width: '100%',
    height: '30%',

    paddingTop: customDimensions.statusBarHeight + 5,
    paddingHorizontal: '5%',

    flexDirection: 'row',
    alignItems: 'center'
  },

  image: {
    width: customDimensions.windowWidth / 3,
    height: customDimensions.windowWidth / 3,
    borderRadius: customDimensions.windowWidth / 3,
    marginRight: 10
  },

  infoCard: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontFamily: 'Nunito_400Regular',
    fontSize: FontSize(16)
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: 'white',
    fontSize: FontSize(24),
    paddingHorizontal: '5%'
  },

  infoContainer: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingBottom: 20
  },

  infoSection: {
    alignItems: 'center',
    height: '100%',
  },

  scroll: {
    flex: 1,
    paddingHorizontal: '5%'
  }
});

export default styles;