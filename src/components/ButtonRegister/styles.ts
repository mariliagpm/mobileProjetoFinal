import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  button: { 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: 55,
    width:DEVICE_WIDTH-150,
    borderRadius: 10,
    zIndex: 100,
    top: -220,
    padding: 24, 
    marginTop:240,
    marginBottom:80 
  },
  container: {
    alignItems: 'center', 
    flex:6
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:18
  }
});