import React, {Component} from 'react'; 
import {  View, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
export default function SignUpSection() {

    
const navigation = useNavigation();
function goRegister(){

  navigation.reset({
    index: 0,
    routes: [{ name: 'Register' }],
}); 
  
} 
 
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={goRegister}  >Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
 
}