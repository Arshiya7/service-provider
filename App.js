import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import firebase from 'firebase';
import Login from './src/components/login/Login';
import Router from './src/components/common/Router';
import Header from './src/components/Header';


const config = {
  apiKey: 'AIzaSyATYNuxqSkdzdsxu82W5aZHuTm5qVjcwPM',
  authDomain: 'serviceprovider-c6bcb.firebaseapp.com',
  databaseURL: 'https://serviceprovider-c6bcb.firebaseio.com',
  projectId: 'serviceprovider-c6bcb',
  storageBucket: 'serviceprovider-c6bcb.appspot.com',
  messagingSenderId: '937556230769'
};

const firebaseApp = firebase.initializeApp(config);

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
