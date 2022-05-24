import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  Router from './src/router'
import { useFonts } from "expo-font";

const App = () => {

  const [loaded]  = useFonts({
    InterBold:     require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium:   require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular:  require("./assets/fonts/Inter-Regular.ttf"),
    InterLight:    require("./assets/fonts/Inter-Light.ttf"),
    InterBlack :   require("./assets/fonts/Poppins-Black.ttf"),
  });

    if (!loaded) return null;
    return (
        <NavigationContainer  >
          <Router />
        </NavigationContainer>
    );
}



export default App;

