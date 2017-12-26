import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ToastAndroid, ImageBackground } from 'react-native';
import firebaseApp from 'firebase';
import { Actions } from 'react-native-router-flux';
import Utils from './../common/Utils';
import Input from './../login/Input';
import LoginButton from './../login/LoginButton';


class Login extends Component {
      state = { email: '', password: '',  };

    render() {
        return (
           
         <ImageBackground
            source={require('./loginBackground.png')}
            style={styles.backgroundImage}>
                    
                    <View style={{ height: Utils.getHeight(), width: Utils.getWidth() }}>
                <View style={{ marginTop: NavBarHeight + 30, justifyContent: 'center' }}>
                  <Image 
                     source={require('./servicepic.jpg')}
                     style={styles.imagestyle}
                  />

                  <View style={{ backgroundColor: '#ffffff', height: 100, borderRadius: 4, marginLeft: 15, marginRight: 15, justifyContent: 'center', marginTop: NavBarHeight - 10 }}>

                       <View style={styles.thumbnailContainerStyle}>
                              <Image 
                                 style={styles.thumbnailStyle}
                                  source={require('./username.png')} />    
                         <View style={styles.inputStyle}>
                           <Input 
                                placeholder="Your email address"
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                           />
                        </View>
                  </View>

                  <View style={{ width: Utils.getWidth(), height: 1, backgroundColor: '#999999' }} /> 
                       <View style={styles.thumbnailContainerStyle}>
                              <Image 
                                 style={styles.thumbnailStyle}
                                  source={require('./password.png')} />          
                        <View style={styles.inputStyle}>
                            <Input 
                                secureTextEntry 
                                placeholder=" Your Password"
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                        </View>                   
                    </View>  
                    </View>   
                    <Text style={styles.errorTextStyle}>
                     {this.state.error}
                   </Text>
                     
                   <LoginButton onPress={Actions.Home} >
                   Sign In
                </LoginButton>

           
        </View> 
         </View>   
                     
        </ImageBackground>
    
        );
    }
}
const NavBarHeight = Utils.getNavBarHeight();
const WIDTH = Utils.getWidth();
const HEIGHT = Utils.getHeight() - NavBarHeight - 10 /*Margin*/;

const styles = StyleSheet.create({
backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        
  
    },

imagestyle: {
        height: 60,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center'
        },
inputStyle: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        marginLeft: 10
            },
 thumbnailStyle: {  
    height: 35,
    width: 35,
    borderRadius: 4,
    justifyContent: 'center',
   
},
thumbnailContainerStyle: {
    marginLeft: 15,
    flexDirection: 'row',
   paddingTop: 8,
   justifyContent: 'space-between',
},
errorTextStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red'
  }
    
});
export default Login; 