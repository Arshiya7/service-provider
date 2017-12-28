import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import Utils from './../common/Utils';


class Service extends Component {
  
    render() {
    return (
        <ImageBackground 
                source={require('./loginBackground.png')}
             style={styles.container1}>
              <TouchableOpacity>
            <View style={styles.container}>
                 <Text style={styles.titleStyle}>
                {this.props.text}
                  </Text>
                <View style={styles.imgContainer}>
                  <View style={styles.imgAlignContainer}>
                    <TouchableOpacity>
                        <Image 
                        source={require('./rightBtn.png')}
                        style={styles.imgStyle}
                        />
                    </TouchableOpacity>
                  </View>
                </View>

            </View>
            </TouchableOpacity>
        </ImageBackground>  
         );
     }
     }
     const styles = {
         container1: {
                flex: 1,

         },
         container: {
           flexDirection: 'row',
           height: Utils.getNavBarHeight(),
         borderColor: '#fff',
         borderWidth: 1,
           alignItems: 'center',
           margin: 15
           
         },
         imgContainer: {
           flex: 1,
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'flex-end'
         },
       
         imgAlignContainer: {
           flex: 1,
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'flex-end'
         },
         imgStyle: {
           width: 30, 
           height: 30
         },
         titleStyle: {
            fontSize: 17, 
            color: 'black', 
            marginLeft: 15
         }
     };
export default Service;