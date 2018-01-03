import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Utils from './../common/Utils';
import Swiper from './../Swiper';
import Header from './../Header';
import Homeservice from './Homeservice';


class HomeContent extends Component {
   constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <View style={{ flex: 1 }}>   
            <View>
            <Header headerText="Service Provider" />  
            </View>
                <ScrollView>
                <Homeservice serviceText="Electrical" />
                <Homeservice serviceText="Plumber" />
                <Homeservice serviceText="Carpenter" />
                <Homeservice serviceText="Beauty" />
                </ScrollView>
            </View >
            
          
        );
    }
}
export default HomeContent;
