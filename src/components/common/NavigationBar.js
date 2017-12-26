import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Utils from './../common/Utils';

class NavigationBar extends Component {
   constructor(props) {
        super(props);
    }
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <TouchableOpacity onPress={this.props.backPress}>
            <Image 
            source={this.props.backimg}
            style={styles.imgStyle}
            />
            </TouchableOpacity>
            <Text style={this.props.titleStyle}>
                {this.props.children}
            </Text>
            </View>
            <View style={styles.imgContainer}>
               <View style={styles.imgAlignContainer}>
               <TouchableOpacity onPress={this.props.img1Press}>
               <Image 
               source={this.props.img1}
               style={styles.imgStyle}
               />
               </TouchableOpacity>
               <TouchableOpacity onPress={this.props.img2Press}>
               <Image
               source={this.props.img2}
               style={styles.imgStyle}
               />
               </TouchableOpacity>
               <TouchableOpacity onPress={this.props.img3Press}>
               <Image 
               source={this.props.img3}
               style={styles.imgStyle}
               />
               </TouchableOpacity>
               </View>
            </View>
        </View>
             
    );
}
}
const styles = {
    container: {
      flexDirection: 'row',
      height: Utils.getNavBarHeight(),
      backgroundColor: '#ffffff', 
      alignItems: 'center',
      
    },
    imgContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imgAlignContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    imgStyle: {
      width: 30, 
      height: 30
    }
};
export default NavigationBar;