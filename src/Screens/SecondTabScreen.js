/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SecondTabScreen extends Component {
  onPress = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Second Tab</Text>
        <Button
          title="Toggle Drawer"
          onPress={() =>
            this.props.navigator.toggleDrawer({
              side: 'left',
              animated: true
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
