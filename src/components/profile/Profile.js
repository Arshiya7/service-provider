import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Utils from './../common/Utils';
import ProfilePage from './ProfilePage';
import Bar from './Bar';

class Profile extends Component {
  
    render() {
    return (
        <View style={styles.container}>
          <ProfilePage />
          <Bar />
        
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
export default Profile;