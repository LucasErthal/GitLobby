import { StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import CustomDimensions from '../../utils/dimensions';
import FontSize from '../../utils/responsiveFontSize';

const colors = new Colors();
const customDimensions = CustomDimensions();

const styles = StyleSheet.create({
  container: {
    width: customDimensions.windowWidth,
    height: customDimensions.windowHeight,
    backgroundColor: colors.blackPrimary
  },

  //#region SearchBar
  searchBar: {
    width: '100%',
    height: '15%',

    paddingTop: customDimensions.statusBarHeight,
    paddingHorizontal: '5%',

    backgroundColor: colors.purplePrimary,

    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  input: {
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
    fontFamily: 'Nunito_400Regular'
  },

  searchButton: {
    width: '20%',
    height: '60%',
  },
  //#endregion SearchBar

  //#region ResultContainer
  resultContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
  },

  description: {
    textAlign: 'center',
    fontFamily: 'Nunito_600SemiBold',
    color: 'white',
    fontSize: FontSize(18)
  },
  //#endregion ResultContainer

  //#region LastSearchsContainer
  lastSearchsContainer: {
    flex:1,
    paddingHorizontal: '3%',
  },

  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: 'white',
    fontSize: FontSize(24)
  },
  //#endregion LastSearchsContainer
  
});

export default styles;