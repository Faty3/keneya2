import { View, Image, Button, Text, TouchableOpacity, Animated, ScrollView, Pressable } from 'react-native'
import React, { useRef, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

export default function Inter() {
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
        </SafeAreaView>
  )
}