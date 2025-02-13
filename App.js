import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import 'react-native-gesture-handler';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

// Prevent the splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();



import Welcome from './screens/Welcome';
import Login from './screens/Login';
import LangSport from './screens/LangSport';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }
return(  
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Welcome">
  <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LangSport"
        component={LangSport}
        options={{ headerShown: false }}
      />
  </Stack.Navigator>
</NavigationContainer>
);

}