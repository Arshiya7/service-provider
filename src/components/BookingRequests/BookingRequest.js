/*eslint linebreak-style: ["error", "unix"]*/
/*eslint linebreak-style: ["error", "windows"]*/ 
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View,TouchableOpacity } from 'react-native';
import Utils from '../common/Utils';

class Homeservice extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ margin: 10, padding: 10, borderColor: '#808080', borderWidth: 1, flexDirection: 'row' }}>
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#a6a6a6', borderRadius: 3 }}>
          <Text style={{ marginTop: 1, fontWeight: 'Bold' }}>Booking Number</Text>
              
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }}> 
             Car Number</Text>
          </View>
         
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Homeservice;
