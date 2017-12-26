import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Login from './src/components/login/Login';

class App extends Component {
   render() {
      return (
        <View style={{ flex: 1 }}>
           <StatusBar
             backgroundColor="rgb(51, 153, 255)"
             barStyle="light-content"
           />
         <Login />
         </View>
      );
   }
}
export default App;
