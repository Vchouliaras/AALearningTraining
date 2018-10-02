import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

class Animations extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 3000
      }
    ).start()
  }

  render() {
    return (
      <Animated.View style={{
        ...styles.ball,
        opacity: this.state.fadeAnim
      }}>
        <Text>Animate Me!</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  ball: {
    justifyContent: 'center',
    opacity: 0,
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'cyan'
  }
})

export default Animations