import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LoginButton = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return ( 
       <TouchableOpacity onPress={onPress} style={buttonStyle}>
       <Text style={textStyle}>
             {children}
       </Text>
       </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
       alignSelf: 'center',
        fontSize: 15.56,
        fontWeight: '500',
        color: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        margin: 15,
        alignSelf: 'stretch',
        borderRadius: 4,
        borderWidth: 1,
       borderColor: '#ffffff',
       marginTop: 10
       }
};

export default LoginButton ;
