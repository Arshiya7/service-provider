/*eslint linebreak-style: ["error", "windows"]*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Utils from './Utils';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
 
});
const imageWidth = Utils.getWidth() - 20;
const imageHeight = imageWidth * (150 / 250);


class swiper extends Component {
    render() {
        return (
            <Swiper 
                style={styles.wrapper} 
            >
             
            <Image 
                style={{ height: imageHeight,
                width: imageWidth,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10 }}               
                source={require('./service.jpg')}
            />
            <Image
                style={{ height: imageHeight,
                    width: imageWidth,
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10 }}
                source={require('./laundry.jpg')}
            />
            <Image
                style={{   height: imageHeight,
                width: imageWidth,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10 }}
                source={require('./beauty.jpg')}
            />
              
            </Swiper>
          );
        }
}
export default swiper;
