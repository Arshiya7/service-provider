/*eslint linebreak-style: ["error", "unix"]*/
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './/Home';
import About from './/About';
import Service from './/Service';

const Routes = () => (
   < Router 
   navigationBarStyle={{ backgroundColor: 'rgb(51, 153, 255)' }}
   titleStyle={{ color: 'white' }}
   >
      <Scene key="root">
         <Scene 
          key="home" 
          component={Home} 
          title="Service" 
       
         />
         <Scene 
         key="about" 
         component={About} 
         title="Service provider" 
         
         />
         <Scene 
         key="service" 
         component={Service} 
         title="Service Accepter" 
         
         />
      </Scene>
   </Router>
);
export default Routes;
