
/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Platform, Dimensions } from 'react-native';

class Utils extends React.Component {
static getNavBarHeight() {
        return Platform.OS === 'ios' ? 64 : 54;
    } 

    static getWidth() {
        return Dimensions.get('window').width;
    }

    static getHeight() {
        return Dimensions.get('window').height;
    }
}
export default Utils;
