import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Utils from './../common/Utils';
import Swiper from './../Swiper';
import Header from './../Header';
import Homeservice from './Homeservice';
import HomeRepair from './HomeRepair';
import HomeAppliance from './HomeAppliance';
import Home1 from './Home1';


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
                <Homeservice />
                <HomeAppliance />
                <HomeRepair />
                < Home1 />
                </ScrollView>
            </View >
            
          
        );
    }
}
export default HomeContent;
