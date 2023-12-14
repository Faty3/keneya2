import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Welcome';
import Chat from '../Screens/Chat';
import Number from '../Screens/Number';
import Profile from '../Screens/Profile';
import AppNavigation from './AppNavigation';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }} className="border bg-white ">
      <Tab.Screen name="Home" component={AppNavigation} 
      options={{
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        }} />
      <Tab.Screen name="Chat" component={Chat} 
       options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="wechat" color={color} size={size} />
        ),
        }}
      />
      <Tab.Screen name="Number" component={Number} 
       options={{
        tabBarLabel: 'Numero Vert',
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          < FontAwesome name="user" color={color} size={size} />
        ),
        }}
      />
</Tab.Navigator>
  )
}