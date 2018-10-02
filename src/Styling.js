import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// https://github.com/vhpoet/react-native-styling-cheat-sheet

class Styling extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>Box No1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box No2</Text>
        </View>
        <View style={styles.box3}>
          <Text>Box No3</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // Normally you will use flex: 1,
    // which tells a component to fill
    // all available space, shared evenly
    // amongst each other component with
    // the same parent
    // Parent should have a flex, or height
    height: '100%',
    backgroundColor: '#F5FCFF',
    // flexDirection: 'row',
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  box3: {
    flex: 3,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Styling