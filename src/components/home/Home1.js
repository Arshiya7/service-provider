import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View,TouchableOpacity } from 'react-native';
import Utils from '../common/Utils';
import Homeservice from './Homeservice';


class home1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
     
       <Homeservice />

      </View>
    );
}
}
export default home1;
