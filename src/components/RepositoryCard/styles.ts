import { StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import FontSize from '../../utils/responsiveFontSize';

const colors = new Colors();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackSecondary,
    width: '100%',
    height: 180,
    marginVertical: 5,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: colors.purpleSecondary,
    borderWidth: 1,
  },

  button: {
    width: '100%',
    height: '100%',
    padding:10,
    borderRadius: 10,
    justifyContent: 'space-between'
  },

  header: {
    width: '100%',
  },

  title: {
    color: colors.bluePrimary,
    fontSize: FontSize(20),
    fontFamily: 'Nunito_600SemiBold'
  },

  text: {
    color: colors.greyPrimary,
  },

  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  languageCircle: {
    backgroundColor: colors.bluePrimary,
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 10
  }
});

export default styles;