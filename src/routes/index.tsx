import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';
import 'react-native-gesture-handler';

import RegisterPage from '../pages/Register/'; 

import LoginPage from '../pages/Login/'; 
 

import ProductList from '../pages/ListProducts'; 
  
const Stack = createStackNavigator(); 

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
      
            <Stack.Navigator>
                
            <Stack.Screen name="Register" component={RegisterPage} /> 
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Lista de Produtos" component={ProductList} />    
         
            </Stack.Navigator> 
        </NavigationContainer>
    );
}