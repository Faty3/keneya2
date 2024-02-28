import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Welcome from '../Screens/Welcome';
import Chat from '../Screens/Chat';
import Number from '../Screens/Number';
import Profile from '../Screens/Profile';
import Genre from '../Screens/Genre';
import Bonjour from "../Screens/Bonjour";
import Bonjours from "../Screens/Bonjours";
import Jamais from "../Screens/Jamais";
import Jamaiss from "../Screens/Jamaiss";
import Fonction from "../Screens/Fonction";
import Kunafoni from "../Screens/Kunafoni";
import Quiz from "../Screens/Quiz";
import Locate from "../Screens/Locate";
import Rdv from "../Screens/Rdv";
import Puberte from "../Screens/Puberte";
import Cycle from "../Screens/Cycle";
import Regles from "../Screens/Regles";
import Infection from "../Screens/Infection"
import Deja from "../Screens/Deja";
import Etape from "../Screens/Etape";
import Debut from "../Screens/Debut";
import Inter from "../Screens/Inter";
import Fin from "../Screens/Fin";
import Cadeau from "../Screens/Cadeau";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{gestureEnabled:true}}>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="Chat"
          options={{ headerShown: false }}
          component={Chat}
        />
        <Stack.Screen
          name="Number"
          options={{ headerShown: false }}
          component={Number}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
        <Stack.Screen
          name="Genre"
          options={{ headerShown: false }}
          component={Genre}
        />
        
        <Stack.Screen
          name="Bonjour"
          options={{ headerShown: false }}
          component={Bonjour}
        />
        <Stack.Screen
          name="Bonjours"
          options={{ headerShown: false }}
          component={Bonjours}
        />
        <Stack.Screen
          name="Jamais"
          options={{ headerShown: false }}
          component={Jamais}
        />
        <Stack.Screen
          name="Jamaiss"
          options={{ headerShown: false }}
          component={Jamaiss}
        />
        <Stack.Screen
          name="Deja"
          options={{ headerShown: false }}
          component={Deja}
        />
        <Stack.Screen
          name="Fonction"
          options={{ headerShown: false }}
          component={Fonction}
        />
        <Stack.Screen
          name="Kunafoni"
          options={{ headerShown: false }}
          component={Kunafoni}
        />
        <Stack.Screen
          name="Quiz"
          options={{ headerShown: false }}
          component={Quiz}
        />
        <Stack.Screen
          name="Locate"
          options={{ headerShown: false }}
          component={Locate}
        />
        <Stack.Screen
          name="Rdv"
          options={{ headerShown: false }}
          component={Rdv}
        />
        <Stack.Screen
          name="Debut"
          options={{ headerShown: false }}
          component={Debut}
        />
        <Stack.Screen
          name="Inter"
          options={{ headerShown: false }}
          component={Inter}
        />
        <Stack.Screen
          name="Fin"
          options={{ headerShown: false }}
          component={Fin}
        />
        <Stack.Screen
          name="Puberte"
          options={{ headerShown: false }}
          component={Puberte}
        />
        <Stack.Screen
          name="Cycle"
          options={{ headerShown: false }}
          component={Cycle}
        />
        <Stack.Screen
          name="Infection"
          options={{ headerShown: false }}
          component={Infection}
        />
        <Stack.Screen
          name="Regles"
          options={{ headerShown: false }}
          component={Regles}
        />
        <Stack.Screen
          name="Etape"
          options={{ headerShown: false }}
          component={Etape}
        />
        {/* <Stack.Screen
          name="Infection"
          options={{ headerShown: false }}
          component={Infection}
        /> */}
        <Stack.Screen
          name="Cadeau"
          options={{ headerShown: false }}
          component={Cadeau}
        />
      </Stack.Navigator>
  );
}
