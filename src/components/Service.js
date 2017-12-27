/*eslint linebreak-style: ["error", "unix"]*/
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Service = () => {
   const goToAbout = () => {
      Actions.about();
   };
   return (
    <View style={{ flex: 1 }}>
      
    </View>
  );
};
export default Service;
