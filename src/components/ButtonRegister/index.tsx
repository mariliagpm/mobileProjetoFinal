
import React, {Component} from 'react'; 

import {  View, Text} from 'react-native';


import { TouchableOpacity,
   } from 'react-native';
  import styles from './styles';


interface Props {
   
    value: string; 
    onPress: any;
    
  }

  export default function ButtonRegister(props: Props) {


    return (

<View style={styles.container}>
   
<TouchableOpacity style={styles.button} onPress={props.onPress} >
  <View>
     <Text style={styles.text} >CREATE ACCOUNT</Text>
  </View>
</TouchableOpacity>
</View> 
   );
  }