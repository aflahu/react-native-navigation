import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Drawer extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text> Coba Drawer </Text>
      </View>
    );
  }
}

const styles = {
  root: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
};

export default Drawer;
