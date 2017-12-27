import React, { Component } from 'react';
import { Image, View, Text, StatusBar } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Utils from './../common/Utils';
import Login from './../login/Login';
import Home from './../home/Home';
import Profile from './../profile/Profile';

class RouterComponent extends Component {

    render() {
        return (
      <Router >
        <Scene sceneStyle={{ flex: 1, backgroundColor: 'rgb(49,49,49)' }}>   
         <Scene
              key="Login"
              component={Login}
              navigationBarStyle={{ backgroundColor: '#414040', height: Utils.getNavBarHeight(), borderBottomColor: '#414040' }}
              leftButtonIconStyle={styles.backstyle}
              hideNavBar={true}
              sceneStyle={{ backgroundColor: 'rgb(49,49,49)' }}
         />
          <Scene
              key="Home"
              component={Home}
              navigationBarStyle={{ backgroundColor: '#414040', height: Utils.getNavBarHeight(), borderBottomColor: '#414040' }}
              leftButtonIconStyle={styles.backstyle}
              hideNavBar={true}
              sceneStyle={{ backgroundColor: 'rgb(49,49,49)' }}
         />
        <Scene
              key="Profile"
              component={Profile}
              navigationBarStyle={{ backgroundColor: '#414040', height: Utils.getNavBarHeight(), borderBottomColor: '#414040' }}
              leftButtonIconStyle={styles.backstyle}
              hideNavBar
              sceneStyle={{ backgroundColor: 'rgb(49,49,49)' }}
         />
       
      </Scene> 
    </Router>
        );
    }

}
const styles = {
     titleStyle1: {
       color: '#ffffff',
       fontSize: 20,
       alignSelf: 'center',
       justifyContent: 'center',
       marginTop: 15
     },
     titleStyle2: {
        color: '#ffffff',
       fontSize: 11,
       alignSelf: 'center'
     },
     titleStyle3: {
       color: '#ffffff',
       fontSize: 22,
       marginLeft: 25,
       fontFamily: '300',
       maxWidth: Utils.getWidth() * 0.70,
       marginTop: 17,
       textAlign: 'center'
     }, 
     backstyle: {
       marginLeft: 3,
       alignSelf: 'center',
       justifyContent: 'center',
       height: 24,
       width: 24
     },
     titleStyle: {
      color: '#ffffff',
      fontSize: 18,
      alignSelf: 'flex-start',
      marginLeft: 25,
      marginRight: 5,
      fontWeight: '500',
      maxWidth: Utils.getWidth() * 0.80
  },
  
  subTitleStyle: {
      color: '#ffffff',
      fontSize: 12,
      fontWeight: '200',
      alignSelf: 'flex-start',
      marginLeft: 25,
      maxWidth: Utils.getWidth() * 0.80
  }

};
export default RouterComponent;