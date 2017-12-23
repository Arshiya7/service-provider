import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Swiper from './src/components/Swiper';

class App extends Component {
   render() {
      return (
        <View style={{ flex: 1 }}>
           <StatusBar
             backgroundColor="rgb(51, 153, 255)"
             barStyle="light-content"
           />
         <Swiper />
         </View>
      );
   }
}
export default App;
