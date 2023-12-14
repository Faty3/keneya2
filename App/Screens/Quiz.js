import { View, Image, Button, Text, TouchableOpacity, Animated, ScrollView, Pressable } from 'react-native'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default function Quiz() {
    const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown : false,
    });
  }, []);
  
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <View className="absolute w-full h-[100px] bg-[#DE1457]">
            <View className="flex-row justify-start top-12">
                <TouchableOpacity onPress={()=> navigation.goBack()} 
                    className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                      <ArrowLeftIcon size="20" color="#DE1457" />
                </TouchableOpacity>
            </View>
       </View>
        <Text className="text-[22px] text-white font-bold mt-2 ml-36">Quiz SSR</Text>
        <View className="items-center rounded-xl border border-[#DE1457] bg-white shadow-md shadow-red-400 mt-12 mb-3 space-y-2 mx-4">
        <Text className="pt-2 font-bold items-center color-[#DE1457] text-[18px]">
          REGLES DU JEU
        </Text>
        <Text className="mx-2 text-[17px] pb-2">
              - Le jeu est reparti en 3 grands niveaux.
              {'\n'}- Chaque niveau est composé de maximum {'\n'}   8 à 10 questions.
              {'\n'}- Chaque question a un temps limite de 20 {'\n'}   secondes.
              {'\n'}- Pour passer chaque niveau, l’utilisateur {'\n'}   doit avoir un score minimum de 80 %.
            </Text>
        </View>
        <View className="flex-row shadow-md shadow-red-400">
            <TouchableOpacity onPress={() => navigation.navigate("Debut")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white space-x-2 px-2 py-3 shadow-md my-6 mx-3">
                <Image source={require('./../../assets/images/debut.png')} className=" w-30 h-30 rounded-lg"/>
                <Text className="text-[15px] text-center font-bold">Niveau débutant</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Inter")}
                className="rounded-lg w-44 border border-[#DE1457] bg-white px-2 py-3 shadow-md my-6 ">
                <Image source={require('./../../assets/images/inter.png')} className="items-center w-30 h-30 rounded-lg"/>
                <Text className="text-[15px] text-center font-bold">Niveau Intermédiaire</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row shadow-md shadow-red-400 my-[-8]">
            <TouchableOpacity onPress={() => navigation.navigate("Fin")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white py-3 px-2 shadow-md mx-3">
                <Image source={require('./../../assets/images/fin.png')} className="my-1 w-30 h-30 rounded-lg"/>
                <Text className="text-[15px] text-center font-bold">Niveau avancé</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cadeau")}
            className="rounded-lg w-44  border border-[#DE1457] bg-white py-3 shadow-md">
                <Image source={require('./../../assets/images/cadeau.png')} className="ml-5 w-30 h-30 rounded-md"/>
                <Text className="text-[14px] text-center font-bold">Récompenses gagnées</Text>
            </TouchableOpacity>
        </View>    
        </SafeAreaView>
  )
}
