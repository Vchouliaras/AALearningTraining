import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class HttpExample extends Component {

  state = {data: ''}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
      this.setState({ data: response})
    })
    .catch((error) => {
        console.error(error);
    });
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