import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: { 
    top: 130,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
      
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:18
  },
});
