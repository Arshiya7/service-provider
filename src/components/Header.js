/*eslint linebreak-style: ["error", "unix"]*/
import React from 'react';
import { Text, View } from 'react-native';
import Utils from './../components/common/Utils';

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
        backgroundColor: 'rgb(51, 153, 255)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        height: Utils.getNavBarHeight('window'),
        width: Utils.getWidth('window'),
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
       
    },

    textStyle: {
        fontSize: 20,
        fontFamily: 'Roboto Medium',
        color: '#ffffff',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginHorizontal: 50,
        marginBottom: 15,
        alignItems: 'center',
        paddingLeft: 30,
        textAlign: 'center'
        
    },
};
export default Header;
