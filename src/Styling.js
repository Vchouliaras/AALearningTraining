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
    height: '100%',
    backgroundColor: '#F5FCFF',
  },
  box1: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 0,
    backgroundColor: 'green'
  },
  box2: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 10,
    zIndex: 2,
    backgroundColor: 'yellow'
  },
  box3: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -50,
    marginLeft: -50,
    backgroundColor: 'cyan',
    borderRightColor: 'black',
    borderRightWidth: 3,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  }
})

export default Styling