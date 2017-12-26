import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class DrawerButton extends Component {
    handlePress(e) {
        if (this.props.onPress) {
        this.props.onPress(e);
        }
    }
    render() {
      return (
          <View 
          style={{ 
              position: 'absolute', 
              justifyContent: 'center', 
              alignItems: 'center',
              top: 12,
              paddingLeft: 18
               }}
          >
        <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}
        >
        <Text>{this.props.children}</Text>
        </TouchableOpacity>
        </View>
        );
    }
}
export default DrawerButton;