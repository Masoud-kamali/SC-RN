
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import getWeb3 from "./getWeb3";
import contract from "./src/deployContract";
import ReportContract from './src/contracts/ReportContract';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserType from './src/screens/UserType';
import EnterPhoneNumberNormalUser from './src/screens/EnterPhoneNumberNormalUser';
import EnterPhoneNumberExpertUser from './src/screens/EnterPhoneNumberExpertUser';
import ConfirmationCode from './src/screens/ConfirmationCode';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import SideMenu from './src/components/drawer/SideMenu';
import Map from './src/screens/Map';
import ReportDetail from './src/screens/ReportDetail';
import Toast from "react-native-simple-toast";




console.disableYellowBox = true;



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawerNavigator({navigation, route}) {
    return (
        <Drawer.Navigator
            drawerPosition= "right"
            headerRight={true}
            screenOptions={{ swipeEnabled: false }}
            drawerContent={(props) => <ScrollView><SideMenu {...props}/></ScrollView>}>
            <Drawer.Screen name="Main" component={Main}/>
        </Drawer.Navigator>
    );
}

function MapDrawerNavigator({navigation, route}) {
    return (
        <Drawer.Navigator
            drawerPosition= "right"
            headerRight={true}
            screenOptions={{ swipeEnabled: false }}
            drawerContent={(props) => <ScrollView><SideMenu {...props}/></ScrollView>}>
            <Drawer.Screen name="Map" component={Map}/>
        </Drawer.Navigator>
    );
}




const App = () => {


    useEffect(async ()=>{
        const web3 = await getWeb3();

        if(web3 !== null){


        }else{
            Toast.show('برنامه به شبکه متصل نیست', Toast.LONG);

        }

    },[]);

  return (
      <NavigationContainer initialRouteName="Login">
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserType" component={UserType} />
          <Stack.Screen name="EnterPhoneNumberNormalUser" component={EnterPhoneNumberNormalUser} />
          <Stack.Screen name="EnterPhoneNumberExpertUser" component={EnterPhoneNumberExpertUser} />
          <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="MainDrawerNavigator" component={MainDrawerNavigator} />
          <Stack.Screen name="MapDrawerNavigator" component={MapDrawerNavigator} />
          <Stack.Screen name="ReportDetail" component={ReportDetail} />

        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
