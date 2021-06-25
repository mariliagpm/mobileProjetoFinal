import React, {Component} from 'react'; 
import {  View, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
export default function SignInSection() {

    
const navigation = useNavigation();
function goLogin(){

  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }],
}); 
  
} 
 
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={goLogin}>Login</Text> 
      </View>
    );
 
}