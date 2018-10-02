import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Styling extends Component {
  render() {
    return (
      <View>
        <Text style={styles.normal}>Normal Text</Text>
        <Text style={styles.big}>Big Text</Text>
        <Text style={styles.bold}>Bold Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  normal: {
    fontSize: 16,
    color: 'green'
  },
  big: {
    fontSize: 30,
    color: 'blue'
  },
  bold: {
    fontSize: 30,
    color: 'yellow',
    fontWeight: '800'
  }
})

export default Styling