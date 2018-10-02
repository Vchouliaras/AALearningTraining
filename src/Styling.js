import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

class Styling extends Component {
  render() {
    return (
      <LinearGradient colors={['#4c009f', '#1e4998', '#192f33']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Styling
