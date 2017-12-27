import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Utils from './../common/Utils';
import Header from './../Header';

class HomeContent extends Component {
   constructor(props) {
        super(props);
    }
    render() {
    return (
        <View style={styles.container}>
         
         <Header
         headerText="Service provider"
         />
         <Text> hi</Text>
        </View>
             
    );
}
}
const styles = {
    container: {
     flex: 1,
      backgroundColor: '#ffffff', 
     
      
    },
   
};
export default HomeContent;