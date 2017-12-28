import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';


class ProfilePage extends Component {
  
    render() {
    return (
        <ImageBackground 
        source={require('./loginBackground.png')}
        style={styles.container}>

        <View style={styles.header}>
             <View style={styles.profile}>
                    <Image 
                    source={require('./profile.jpg')}
                    style={styles.profilepic}
                    />
             </View>
             <Text style={styles.name}> Arshiya </Text>
             <Text style={styles.post}>Developer</Text>


      </View>
        </ImageBackground>
    );
}
}
const styles = {
    container: {
     flex: 1,
     alignSelf: 'stretch',
      width: null
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
       
    },
    profile: {
       width: 180,
       height: 180,
       borderRadius: 100,
       borderColor: '#fff',
       borderWidth: 10
    },
    profilepic: {
      flex: 1,
      width: null,
      alignSelf: 'stretch',
      borderRadius: 100,
      borderColor: '#fff',
      borderWidth: 4
    },
    name: {
          marginTop: 20,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#fff'
    },
    post: {
        fontSize: 14,
        fontWeight: '300',
        color: 'red'
    }
   
};
export default ProfilePage;