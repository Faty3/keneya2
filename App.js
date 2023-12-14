import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import AppNavigation from './App/Navigations/AppNavigation';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location'; 

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  return (
    <View  className="flex-1 justify-center bg-white ">
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </View>
  );
}

