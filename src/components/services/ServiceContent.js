import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground,ScrollView } from 'react-native';
import Utils from './../common/Utils';
import Service from './Services';


class ServiceContent extends Component {
  
    render() {
    return (
        <ScrollView>
  <View style={styles.container1}>       
< Service 
   text="Plumber"
 /> 
 < Service 
   text="Electrician"
 />
  < Service 
   text="Carpenter"
 />
  < Service 
   text="Beauty"
 />
  < Service 
   text="plumber"
 />
  < Service 
   text="plumber"
 />
  < Service 
   text="plumber"
 />
  < Service 
   text="plumber"
 />
  < Service 
   text="plumber"
 />
 </View>
             
   </ScrollView>          
         );
     }
     }
     const styles = {
         container1: {
                flex: 1,

         },
       
     };
export default ServiceContent;