import {StyleSheet, Dimensions} from 'react-native';

const contWidth = Dimensions.get('window').width * 0.9;
const posHeight = Dimensions.get('window').height * 0.1;
const contHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  window: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: contHeight,
  },
  container: {
    width: contWidth,
    margin: 10,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headingPage: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  subHeading: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '100',
    paddingTop: 10,
  },
  contLogo: {
    alignItems: 'center',
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
    color: '#F20231',
    padding: 10,
    fontSize: 15,
  },
  formInput: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: '#EFBF7F',
  },
  rightPos: {
    alignItems: 'flex-end',
    marginTop: -10,
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
    color: 'white',
    fontSize: 20,
  },
  smallText: {
    color: '#fff',
    fontSize: 15,
  },
  smallTextButton: {
    color: 'orange',
    fontSize: 15,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',
  },
});
