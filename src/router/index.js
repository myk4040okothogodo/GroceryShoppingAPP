import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, Home, Profile, Notification, Favorite } from "../screens"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';
import Categories from '../screens/Categories';
import Detail from '../screens/Detail';


const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MainApp(){
    return (
      <Tab.Navigator tabBar = {props => <BottomNavigator {...props} />}>
        <Tab.Screen 
            name="Home"  
            component={Home}
            options = {{headerShown: false}}
        />
        <Tab.Screen  
            name="Favorite" 
            component={Favorite} 
            options = {{headerShown: false}}
        />
        <Tab.Screen 
            name="Notification" 
            component={Notification} 
            options = {{headerShown: false}}
        />
        <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options = {{headerShown: false}}
        />
      </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen 
              name="GetStarted" 
              component={GetStarted}  
              options={{headerShown: false}}/>
          <Stack.Screen 
              name="MainApp" 
              component={MainApp}  
              options={{headerShown: false}}/>
          <Stack.Screen 
              name = "Categories"
              component = {Categories}
              options ={{headerShown: false}}/>
          <Stack.Screen 
              name = "Detail"
              component = {Detail}
              options ={{headerShown: false }}
          />
      </Stack.Navigator>
    );
};


export default Router;


const styles = StyleSheet.create({});
