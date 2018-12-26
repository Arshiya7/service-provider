import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground,Picker } from 'react-native';
import Utils from '../common/Utils';
import DatePicker from 'react-native-datepicker';
import LoginButton from './../login/LoginButton';

class BookingService extends Component {
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }
    constructor(props){
        super(props)
        this.state = {date:"26-12-2018"}
      }
    render() {
    return (
        <View style={styles.container1}>


            <View style={styles.container}>
                    <Image  
                        source={require('./Carservice.png')}
                        style={styles.Image} 
                    />
                    <Picker 
                        style={{ height: 50, width: 300,marginLeft: 20 }}
                        selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                            <Picker.Item label = "KA017 mz2018" value = "KA017 mz2018" />
                            <Picker.Item label = "MP015 mz2010" value = "MP015 mz2010" />
                            <Picker.Item label = "TN011 mz2019" value = "TN011 mz2019" />
                    </Picker>
            </View>
             
            <View style={styles.container}>
                  
                    <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2019-05-01"
                            maxDate="2019-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                     />
            </View>
            <View style={styles.container}>
                  
                 <Text style={{ fontSize: 16, color: '#000' }}>Service Type</Text>

                  <Picker 
                        style={{ height: 50, width: 250, marginLeft: 20 }}
                        selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                            <Picker.Item label = "Free Service" value = "Free Service" />
                            <Picker.Item label = "Periodic Service" value = "Periodic Service" />
                            <Picker.Item label = "Washing" value = "Washing" />
                            <Picker.Item label = "Unscheduled REpair" value = "Unscheduled REpair" />
                    </Picker>
          </View>
          <View style={styles.container}>
                  
                  <Text style={{ fontSize: 16, color: '#000' }}>Service Location</Text>
 
                   <Picker 
                         style={{ height: 50, width: 250, marginLeft: 20 }}
                         selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                             <Picker.Item label = "Home" value = " Home" />
                             <Picker.Item label = "Maruti mobile support Service" value = " Maruti mobile support Service" />
                             <Picker.Item label = "Workshop" value = "Workshop" />
                           
                     </Picker>
           </View>
           <TouchableOpacity style={styles.buttonStyle}>
       <Text style={styles.textStyle}>
            Book Now
       </Text>
       </TouchableOpacity>
      </View>
       

   
         );
     }
     }
     const styles = {
         container1: {
             flex: 1,
           backgroundColor: '#ADD8E6'
         },
        Image: {
            width: 30, 
            height: 30
         },
         imgContainer: {
           flex: 1,
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'flex-end'
         },
       
         imgAlignContainer: {
           flex: 1,
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'flex-end'
         },
         imgStyle: {
           width: 30, 
           height: 30
         },
         titleStyle: {
            fontSize: 17, 
            color: 'black', 
            marginLeft: 15
         },
         container: {
            flexDirection: 'row',
         
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 8,
            marginLeft: 20,
            marginRight: 20
          },
          text: {
            fontSize: 30,
            alignSelf: 'center',
            color: 'red'
         },
         textStyle: {
            alignSelf: 'center',
             fontSize: 15.56,
             fontWeight: '500',
             color: '#ffffff',
            
         },
         buttonStyle: {
             margin: 15,
             alignSelf: 'stretch',
             borderRadius: 4,
             borderWidth: 1,
            backgroundColor: 'red',
            marginTop: 10,
            padding: 20
            }
     };
export default BookingService;