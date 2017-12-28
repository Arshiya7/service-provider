/*eslint linebreak-style: ["error", "unix"]*/
/*eslint linebreak-style: ["error", "windows"]*/ 

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

class Homeservice extends Component {
  render() {
    return (
    <View style={{ backgroundColor: '#ECEFF1' }}>
    <ScrollView horizontal={true}>
 
    <Text style={{ fontSize: 20, textAlign: 'center' }} >Scroll Me To See The Effect</Text>
 
    <Image source={require('./search.png')} />
 
    <Image source={require('./search.png')} />
 
    <Image source={require('./search.png')} />
 
    <Image source={require('./search.png')} />
 
    <Image source={require('./search.png')} />
 
  <Text style={{fontSize: 20, textAlign: 'center'}} >Scroll View Ends Here.</Text>
 
</ScrollView>
 
</View>
 
);
}
}             
export default Homeservice;
