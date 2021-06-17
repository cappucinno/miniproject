import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const contWidth = Dimensions.get('window').width * 0.9;
const contHeight = Dimensions.get('window').height;
const posHeight = Dimensions.get('window').height * 0.05;

export default StyleSheet.create({
  window: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: contHeight,
  },
  container: {
    width: contWidth,
  },
  contLogo: {
    alignItems: 'center',
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  contInput: {
    position: 'relative',
    top: posHeight,
  },
  warnText: {
    color: '#9e2a2b',
    padding: 10,
    fontSize: 10,
  },
  formInput: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  centerPos: {
    alignItems: 'center',
    margin: 10,
  },
  mainButton: {
    padding: 10,
    backgroundColor: 'red',
    width: 200,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  smallText: {
    color: '#fff',
    fontSize: 15,
  },
  smallTextButton: {
    color: 'orange',
    fontSize: 15,
    marginTop: 5,
  },
});
