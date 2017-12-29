/*eslint linebreak-style: ["error", "unix"]*/
/*eslint linebreak-style: ["error", "windows"]*/ 
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import Utils from '../common/Utils';

class Homeservice extends Component {
  render() {
    return (
      <View style={{ margin: 5, flex: 1 }}>
        <ScrollView horizontal={true}>
        <View>
          <Text>  home service</Text> 
          <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> Laundry </Text>      
            </View>  
            <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> Electricain </Text>      
            </View>  
            <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> plumbing </Text>      
            </View>  
            <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> carpentry </Text>      
            </View>  
            <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> painting </Text>      
            </View>  
            <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> beautyservice </Text>      
            </View>  
            <View 
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#737373',
            borderWidth: 1,
            backgroundColor: 'white',
            width: 70,
            height: 70 }}
          > 
           <Text 
           style={{fontSize: 15,
         color: 'black',
         fontFamily: 'fantasy',
         justifyContent: 'center',
         alignItems: 'center',
         fontWeight: 'bold',
         fontStyle:'normal' }}> pest control </Text>      
            </View>  
         </View>
        </ScrollView>
      </View>

    );
  }
}        
const imageWidth = Utils.getWidth() - 20;
const imageHeight = imageWidth * (150 / 250);    

export default Homeservice;
