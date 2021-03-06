import React, {Component} from 'react'; 
import {StyleSheet, ImageBackground} from 'react-native';
 
import styles from './styles';
const bgSrc= require('../../images/wallpaper.png')  ;
export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

 