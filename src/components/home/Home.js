import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import TabBarItems from './../common/TabBarItems';
import HomeContent from './HomeContent';
import About from './../About';
import Menu from './../common/menu';
import DrawerButton from './../common/DrawerButton';
import CustomNavBar from './../common/CustomNavBar';

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
            source={require('./eventsinactive.png')} 
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
                                img1InActive={require('./eventsinactive.png')}
                                img1Active={require('./eventsactive.bmp')}

                                tab1={<HomeContent />}
                                tab2={<About />}
                                tab3={<About />}
                                
                                tabImagestyle={{ height: 30, width: 30 }}
                                img2InActive={require('./eventsinactive.png')}
                                img2Active={require('./eventsactive.bmp')}

                                
                                tabImagestyle={{ height: 30, width: 30 }}
                                img3InActive={require('./eventsinactive.png')}
                                img3Active={require('./eventsactive.bmp')}

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