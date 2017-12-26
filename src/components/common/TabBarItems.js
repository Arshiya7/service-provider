import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from './../common/NavigationBar';


class TabBarItems extends Component { 
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'tab1' };
    }
   render() {
    return (
        <TabNavigator
            tabBarStyle={{
            height: 60,
            paddingTop: 10 }}
        >
        <TabNavigator.Item      //Tab1
            titleStyle={this.props.titleStyle}
            selectedTitleStyle={this.props.selectedTitleStyle}
            title={this.props.title1} //prop to set title
            renderIcon={() => 
                <Image
                style={this.props.tabImagestyle} //prop to set render icon
                source={this.props.img1InActive} 
                />}
            renderSelectedIcon={() =>
                <Image
                style={this.props.tabImagestyle} // prop to render selected icon
                source={this.props.img1Active} 
                />}
                selected={this.state.selectedTab === 'tab1'}          
                onPress={() => this.setState({ selectedTab: 'tab1' })}  // on press of selected include tab1 prop to render the component                  
        >
        
        {this.props.tab1} 
    
        </TabNavigator.Item>

        <TabNavigator.Item        //Tab2
            title={this.props.title2}
            selectedTitleStyle={this.props.selectedTitleStyle}
            titleStyle={this.props.titleStyle}
            renderIcon={() => 
                <Image
                style={this.props.tabImagestyle}
                source={this.props.img2InActive} 
                />}
            renderSelectedIcon={() =>
                <Image
                style={this.props.tabImagestyle}
                source={this.props.img2Active} 
                />}
            selected={this.state.selectedTab === 'tab2'}          
            onPress={() => this.setState({ selectedTab: 'tab2' })}                               
        >
            <View style={{ flex: 1 }}>
          
               {this.props.tab2}
                </View>
        
        
        </TabNavigator.Item>

        <TabNavigator.Item            //Tab3
            title={this.props.title3}
            selectedTitleStyle={this.props.selectedTitleStyle}
            titleStyle={this.props.titleStyle}
            renderIcon={() => 
                <Image
                style={this.props.tabImagestyle}
                source={this.props.img3InActive} 
                />}
            renderSelectedIcon={() =>
                <Image
                style={this.props.tabImagestyle}
                source={this.props.img3Active} 
                />}
            selected={this.state.selectedTab === 'tab3'}          
            onPress={() => this.setState({ selectedTab: 'tab3' })}                               
        >
       <View style={{ flex: 1 }}>
          
                {this.props.tab3}
                </View>
        </TabNavigator.Item>

 </TabNavigator>
    );
}
}
export default TabBarItems;