import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Utils from './../common/Utils';
import ProfilePage from './ProfilePage';

class Profile extends Component {
  
    render() {
    return (
        <View style={styles.container}>
          <ProfilePage />
        
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