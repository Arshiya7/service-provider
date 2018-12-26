import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Utils from '../common/Utils';


class Service extends Component {
  
    render() {
    return (
        <View>
              <TouchableOpacity onPress={() => Actions.BookingService()}>
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
        </View>  
         );
     }
     }
     const styles = {
         container1: {
               // flex: 1,
           
         },
         container: {
           flexDirection: 'row',
           height: Utils.getNavBarHeight(),
         borderColor: '#fff',
         borderWidth: 1,
           alignItems: 'center',
           marginTop: 15,
           marginBottom: 8,
           marginLeft: 10,
           marginRight: 10
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