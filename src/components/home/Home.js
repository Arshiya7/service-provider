import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import TabBarItems from './../common/TabBarItems';
import HomeContent from './HomeContent';
import About from './../About';
import Profile from './../profile/Profile';
import Menu from './../common/menu';
import DrawerButton from './../common/DrawerButton';
import Header from './../Header';
import ServiceContent from './../services/ServiceContent';

class TouchTabBar extends Component {
  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
}
    openDrawer() {
    this.drawer.openDrawer();
    }
       

render() {
    const navigationView = (
        <View style={[styles.container]}>
            <Image
            source={require('./download.png')} 
            style={{ width: 320, height: 250 }} 
            />
              <Menu />
        </View>
        );
    return (
        <DrawerLayout
        onDrawerSlide={(e) => this.setState({ drawerSlideOutput: JSON.stringify(e.nativeEvent) })}
        onDrawerStateChanged={(e) => this.setState({ drawerStateChangedOutput: JSON.stringify(e) })}
        drawerWidth={320}
        ref={(_drawer) => this.drawer = _drawer}
        renderNavigationView={() => navigationView}
        >
            
              <View style={{ flex: 1 }}>
                            <TabBarItems
                                title1="Home"
                                title2="Services"
                                title3="Profile"
                                titleStyle={{ color: '#000' }}
                                selectedTitleStyle={{ color: '#72bb53' }}
                                tabImagestyle={{ height: 30, width: 30 }}
                                img1InActive={require('./homeservice.png')}
                                img1Active={require('./homeservice.png')}

                                tab1={<HomeContent />}
                                tab2={<ServiceContent />}
                                tab3={<Profile />}
                                
                                tabImagestyle={{ height: 30, width: 30 }}
                                img2InActive={require('./eventsinactive.png')}
                                img2Active={require('./eventsinactive.png')}

                                
                                tabImagestyle={{ height: 30, width: 30 }}
                                img3InActive={require('./profile.png')}
                                img3Active={require('./profile.png')}

                            />
    
        <DrawerButton onPress={this.openDrawer}>
  
  <Image
      source={require('./menu.png')} 
      style={{ width: 60, height: 60 }} 
  />
</DrawerButton>
      </View>
    </DrawerLayout>
    );
}
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        },
};
export default TouchTabBar;
