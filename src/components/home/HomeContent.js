import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Utils from './../common/Utils';
import Header from './../Header';
import Swiper from './../Swiper';
import Homeservice from './Homeservice';

class HomeContent extends Component {
   constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header headerText="Service Provider" />  
            </View>
          
            <Homeservice />
        </View>
          
        );
    }
}
const styles = {
    container: {
     flex: 0.1,
     backgroundColor: '#ffffff', 
    },
   
};
export default HomeContent;
