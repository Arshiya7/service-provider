import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';


class Bar extends Component {
  
    render() {
    return (
      <View style={styles.bar}>
          <View style={styles.barSeprator} >
            <Text style={styles.barTop} >128k</Text>
            <Text style={styles.barBottom}> followers </Text>
        </View> 
         
     </View>
    );
}
}
const styles = {
    bar: {
       borderTopColor: '#fff',
       borderTopWidth: 4,
       backgroundColor: '#ec2e4a',
       flexDirection: 'row'
    },
    barSeprator: {
        borderRightWidth: 4
    },
    barTop: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        fontStyle: 'italic'
    },
    barBottom: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    }
   
};
export default Bar;