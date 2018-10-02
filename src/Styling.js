import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class PlatformSpecific extends Component {

  componentDidMount() {
    console.log('Platform.Version ', Platform.Version)
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Welcome to React Native PlatformSpecific</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === 'ios' ? 30 : 15,
    ...Platform.select({
      ios: { fontSize: 60 },
      android: {fontSize: 15}
    })
  }
})

export default PlatformSpecific