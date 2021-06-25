import {Dimensions} from 'react-native';
import {StyleSheet } from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 50,
    height: 55,
    marginHorizontal: 30,
    marginEnd: 30,
    paddingLeft: 45,
    borderRadius: 15,
    color: '#ffffff',
    marginTop:22,
    marginBottom:22,
    alignSelf:'center',
    fontSize:17
  },
  inputWrapper: {
    
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 40,
    top:40,
  },
});