import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';
 
 
import styles from './styles';

const logoImg= require('../../images/logo.png')  ;
export default function Logo() {
     

 
        return (
            <View style={styles.container}>
              <Image source={logoImg} style={styles.image} />
              <Text style={styles.text}>IMPACTA</Text>
            </View>
        )

}