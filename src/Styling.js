import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class HttpExample extends Component {

  state = { data: '' }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //       method: 'GET'
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     this.setState({ data: response})
  //   })
  //   .catch((error) => {
  //       console.error(error);
  //   });
  // }

  // The word “async” before a function means one
  // simple thing that a function always returns a promise.
  async componentDidMount() {
    // Wait for the promise to be settled
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET'})
      const data = await response.json()

      this.setState({ data })
    } catch (error) {
      console.error('error ', error)
    }
  }

  render() {

    if (!this.state.data) {
      return (
        <View>
          <Text>Loding ...</Text>
        </View>
      )
    }

    return (
      <View>
        <Text>{ this.state.data.body }</Text>
      </View>
    )
  }
}

export default HttpExample