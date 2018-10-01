import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

// React bridge logs
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue'
// MessageQueue.spy(true)

import Styling from './Styling'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Styling />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})