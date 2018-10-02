import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

// React bridge logs
// import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue'
// MessageQueue.spy(true)

import Styling from './Styling'

class App extends Component {
  render() {
    return (
      <Styling />
    )
  }
}

export default App