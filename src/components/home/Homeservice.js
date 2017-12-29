/*eslint linebreak-style: ["error", "unix"]*/
/*eslint linebreak-style: ["error", "windows"]*/ 
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, View,TouchableOpacity } from 'react-native';
import Utils from '../common/Utils';

class Homeservice extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column', margin: 5, flex: 1 }}>
        <ScrollView horizontal={true}>
        <View style={styles.container1}>
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
              <View style={styles.imgAlignContainer}>
                <TouchableOpacity>
                    <Image 
                    source={require('./search.png')}
                    style={styles.imgStyle}
                    />
                </TouchableOpacity>
                <Text style={styles.titleStyle}>
                Electrician
              </Text>
              </View>
            </View>
          </View>
      </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.container}>
              <View style={styles.imgContainer}>
                <View style={styles.imgAlignContainer}>
                  <TouchableOpacity>
                      <Image 
                      source={require('./search.png')}
                      style={styles.imgStyle}
                      />
                  </TouchableOpacity>
                  <Text style={styles.titleStyle}>
                  Plumber
                </Text>
                </View>
              </View>
            </View>
        </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                  <View style={styles.imgAlignContainer}>
                    <TouchableOpacity>
                        <Image 
                        source={require('./search.png')}
                        style={styles.imgStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>
                    Carpentery
                  </Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                  <View style={styles.imgAlignContainer}>
                    <TouchableOpacity>
                        <Image 
                        source={require('./search.png')}
                        style={styles.imgStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>
                    Beauty
                  </Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                  <View style={styles.imgAlignContainer}>
                    <TouchableOpacity>
                        <Image 
                        source={require('./search.png')}
                        style={styles.imgStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>
                    pest control
                  </Text>
                  </View>
                </View>
              </View>
          </TouchableOpacity>
          </View >
        </ScrollView>
      </View>
    );
  }
}
const styles = {
         container1: {
            flexDirection: 'row',
            height: Utils.getWidth(),
            borderColor: '#808080',
            borderWidth: 1,
            alignItems: 'center',  
            flex: 1,
            margin: 5
           
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
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center'
         },
       
         imgAlignContainer: {
           flex: 1,
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center'
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
export default Homeservice;
