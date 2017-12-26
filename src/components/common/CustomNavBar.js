/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import { Text, View } from 'react-native';
import Utils from './Utils';

const Header = (props) => {
const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
   );
};

const styles = {
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(51, 153, 255)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        height: Utils.getNavBarHeight('window'),
        width: Utils.getWidth('window'),
        position: 'absolute',
       
    },

    textStyle: {
        fontSize: 20,
        fontFamily: 'Roboto Medium',
        color: '#000',
        fontWeight: '500',
        justifyContent: 'center',
        marginHorizontal: 50,
        paddingLeft: 30
        
    },
};
export default Header;
