import React, {Component} from 'react';
import {PanResponder, Animated, StyleSheet, Text, View} from 'react-native';

// The gesture responder system manages
// the lifecycle of gestures in your app.

// PanResponder reconciles several touches
// into a single gesture

class DragMe extends Component {

  state = {
    isDragging: false,
    initialTop: 100,
    initialLeft: 100,
    offsetTop: 0,
    offsetLeft: 0
  }


  panHandlers = {
    // Claim the responder
    onStartShouldSetPanResponder: (e, gestureState) => true,

    // The gesture has started, inform the UI
    onPanResponderGrant: (e, gestureState) => {
      // Show visual feedback so the user knows
      // what is happening!
      this.setState({isDragging: true})
    },

    onPanResponderMove: (e, gestureState) => {
      // dx - accumulated distance of the gesture since the touch started
      // dy - accumulated distance of the gesture since the touch started
      const {dx, dy} = gestureState

      this.setState({
        offsetTop: dy,
        offsetLeft: dx
      })
    },

    // The user has released all touches while this view is the
    // responder. This typically means a gesture has succeeded
    onPanResponderRelease: (e, gestureState) => {
      const { dx, dy } = gestureState

      this.setState({
        isDragging: false,
        offsetTop: 0,
        offsetLeft: 0,
        initialTop: this.state.initialTop + dy,
        initialLeft: this.state.initialLeft + dx
      })
    },

  }

  panResponder = PanResponder.create(this.panHandlers)

  render() {

    const dymanicStyles = {
      backgroundColor: this.state.isDragging
        ? 'skyblue'
        : 'steelblue',
      top: this.state.initialTop + this.state.offsetTop,
      left: this.state.initialLeft + this.state.offsetLeft
    }

    console.log(this.panResponder.panHandlers)

    return (
      <View {...this.panResponder.panHandlers} style={[styles.square, dymanicStyles]}>
        <Text style={styles.text}>Grag Me</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  square: {
    position: 'absolute',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase'
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  }
})

export default DragMe