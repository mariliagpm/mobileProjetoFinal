import React, {Component} from 'react'; 
import {Dimensions} from 'react-native';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

import styles from './styles';

interface Props {
   
  value: any;
  source :any;
  placeholder:string;
  returnKeyType:any;
  autoCapitalize:any;
  autoCorrect:any;
  secureTextEntry:boolean;
  onChange: (text: any) => void;
  keyboardtype:any
}

export default function InputeTextField(props: Props) {
  
   
    return (
      <View style={styles.inputWrapper}>
        <Image source={props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input} 
          placeholderTextColor="white"
          placeholder={props.placeholder}
          underlineColorAndroid="transparent"
          onChangeText={props.onChange}
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          keyboardType={props.keyboardtype}
           
        />
      </View>
    );
  
} 

 