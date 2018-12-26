import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Utils from '../common/Utils';
import Service from './Services';


class ServiceContent extends Component {
  
    render() {
    return (
      <View 
               
             style={styles.container1}> 
        <ScrollView>
        
            < Service 
              text="Oil and filter change"
            /> 
            < Service 
              text="New spark plugs (petrol/Diesel engines)"
            />
              < Service 
              text="Removal of wheels and brakes checked"
            />
              < Service 
              text="Brake cylinders, pipes and hoses checked for leaks or damage"
            />
              < Service 
              text="Tyres checked for wear, damage and signs of misalignment"
            />
              < Service 
              text="Brake fluid tested "
            />
              < Service 
              text="Reset service light"
            />
              < Service 
              text="Clutch operation checked (manuals)"
            />
             < Service 
              text="Clutch operation checked (manuals)"
            />
             < Service 
              text="Clutch operation checked (manuals)"
            />
             < Service 
              text="Clutch operation checked (manuals)"
            />
 </ScrollView> 
  
   </View>          
         );
     }
     }
     const styles = {
         container1: {
                flex: 1,
               backgroundColor: '#ADD8E6'
         },
       
     };
export default ServiceContent;