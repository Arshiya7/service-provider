import React, { Component } from 'react';
import { View,  Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Utils from './../common/Utils';

class Menu extends Component {

    render() {
        return (
            <View style={{ backgroundColor: '#fff', height: Utils.getHeight(), width: Utils.getWidth() }}>
               <View style={{ marginTop: NavBarHeight - 50 }}>
                <TouchableOpacity >
                       <View style={styles.thumbnailContainerStyle}>
                           <Image 
                              style={styles.thumbnailStyle}
                              source={require('./navigatePosition.png')} />

                            <Text style={styles.text}>About us</Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                       <View style={styles.thumbnailContainerStyle}>
                           <Image 
                              style={styles.thumbnailStyle}
                              source={require('./navigatePosition.png')} />

                            <Text style={styles.text}>Login</Text>
                      </View>
                      </TouchableOpacity> 
                       <TouchableOpacity >
                       <View style={styles.thumbnailContainerStyle}>
                           <Image 
                              style={styles.thumbnailStyle}
                              source={require('./navigatePosition.png')} />

                            <Text style={styles.text}>Settings</Text>
                      </View>
                      </TouchableOpacity> 
                 </View>

               </View>
              
        );
    }
}
const NavBarHeight = Utils.getNavBarHeight();
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        
},
 thumbnailStyle: {  
    height: 35,
    width: 35
},
thumbnailContainerStyle: {
    marginLeft: 3,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#747474',
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent: 'space-between',
    
},
text: {
        marginLeft: 20,
        flex: 1,
        color: '#000',
        fontSize: 15
    }
});
export default Menu;