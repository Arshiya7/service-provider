
/*eslint linebreak-style: ["error", "unix"]*/
import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import About from './/About';
import Service from './/Service';
import Header from './/Header';


class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <View>
      <Header headerText="Service Provider" /> 
      </View>
      <View style={{ flex: 1 }}>
      <ScrollableTabView
      tabBarBackgroundColor='rgb(51, 153, 255)'
      tabBarActiveTextColor='rgb(51, 51, 255)'
      tabBarUnderlineStyle={{ backgroundColor: 'rgb(51, 51, 255)', height: 3 }}
      tabBarTextStyle={{ fontSize: 14, fontFamily: 'Roboto Medium', fontWeight: '600' }}
      style={{ marginTop: 50 }}
      >
        <Service tabLabel="Service" />
        <About tabLabel="About" />
      </ScrollableTabView>
      </View>   
</View>
    );
  }
  }   
export default Home;
