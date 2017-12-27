import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Login from './src/components/login/Login';
import Router from './src/components/common/Router';
import Header from './src/components/Header';

class App extends Component {
   render() {
      return (
        <View style={{ flex: 1 }}>
        
           <StatusBar
             backgroundColor="rgb(51, 153, 255)"
             barStyle="light-content"
           />
           
         <Router />
         </View>
      );
   }
}
export default App;
