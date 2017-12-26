import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, editable }) => {
    const { inputStyle, ContainerStyle, labelStyle } = styles;
return (
    <View style={ContainerStyle}>
        
        <Text style={labelStyle}>{label}</Text>
        <TextInput 
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            onChangeText={onChangeText}
            editable={editable === undefined || editable}
        />
        </View>

);
    };
    const styles = {

        inputStyle: {
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 15,
            lineHeight: 23,
            flex: 7
        },
        
        labelStyle: {
            color: 'black',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: 15,
            alignSelf: 'center',
       
        },

        ContainerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5
        }
        };
export default Input ;