/*eslint linebreak-style: ["error", "unix"]*/
/*eslint linebreak-style: ["error", "windows"]*/ 
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View,TouchableOpacity } from 'react-native';
import Utils from '../common/Utils';

class Homeservice extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ margin: 10,padding: 30, borderColor: '#808080', borderWidth: 1, flexDirection: 'row' }}>
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'column', margin: 5, borderRightWidth: 1, borderRightColor: '#a6a6a6', borderRadius: 3 }}>
          <Text style={{marginTop:5}}>{this.props.serviceText}</Text>
            <Image
              source={require('./electrical.png')}
              style={{ height: 50, width: 50, margin: 5 }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Electrical</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./plumbing.png')}
              style={{ height: 50, width: 50, margin: 5 }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Plumber</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./carpentry.png')}
              style={{ height: 50, width: 50, margin: 5 }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Carpentry</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./spa.jpg')}
              style={{ height: 50, width: 50, margin: 5 }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Spa </Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./painter.png')}
              style={{ height: 50, width: 50, margin: 5, }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Painter</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./laundry.png')}
              style={{ height: 50, width: 50, margin: 5, }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Laundry</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./ho.png')}
              style={{ height: 50, width: 50, margin: 5, }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center',textAlign: 'center', }}> Home Cleaning</Text>
          </View>
          <View style={{ flexDirection: 'column', borderRightWidth: 1, borderRightColor: '#a6a6a6',borderRadius: 3 }}>
            <Image
              source={require('./search.png')}
              style={{ height: 50, width: 50, margin: 5, }}
            />    
            <Text style={{ fontSize: 12, color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }}> Pest control</Text>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Homeservice;
