import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'


export default function Kunafoni() {
  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown : false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#EED6DE] relative">
        <View className="absolute w-full h-[100px] bg-[#DE1457]">
            <View className="flex-row justify-start top-12">
                <TouchableOpacity onPress={()=> navigation.goBack()} 
                    className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                    <ArrowLeftIcon size="20" color="#DE1457" />
                </TouchableOpacity>
            </View>  
        </View>
        <Text className="text-[22px] text-white font-bold mt-2 ml-28">Keneya Kunafoni</Text>
        <View className="items-center h-56 rounded-xl border border-[#DE1457] bg-white shadow-md shadow-red-400 mt-7 mx-3">
        <Text className="text-[16.8px] p-2">
            Keneya Kunafoni traite les questions liee a la Sante Sexuelle et Reproduction (SSR).
            {'\n'}Alors qu'est-ce que la Sante Sexuelle et Reproductive ?
        {'\n'}Une bonne santé sexuelle et reproductive est un état de bien-être total sur le plan physique, mental et social, relativement à tous les aspects du système reproductif. Dans cet état, les personnes sont en mesure de profiter d'une vie sexuelle satisfaisante et sûre.
        </Text>
        <Text className="text-[18px]">
        </Text>
        </View>
        <View className="flex-row shadow-md shadow-red-400">
            <TouchableOpacity onPress={() => navigation.navigate("Puberte")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white space-x-2 px-4 py-3 shadow-md my-6 mx-3">
                <Image source={require('./../../assets/images/puber.png')} className="ml-2 w-30 h-30 rounded-lg"/>
                <Text className="text-[15px] text-center font-bold">Puberté et adolescence</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Regles")}
                className="rounded-lg w-44 border border-[#DE1457] bg-white px-4 py-3 shadow-md my-6 ">
                <Image source={require('./../../assets/images/cycle.png')} className="ml-2 w-30 h-30 rounded-lg"/>
                <Text className="text-[15px] text-center font-bold">Règles ou menstrues</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row shadow-md shadow-red-400 my-[-8]">
            <TouchableOpacity onPress={() => navigation.navigate("Cycle")}
            className="rounded-lg w-44 border border-[#DE1457] bg-white py-3 shadow-md mx-3">
                <Image source={require('./../../assets/images/calcul.png')} className="my-1 w-32 h-32 ml-6 rounded-lg"/>
                <Text className="text-[15px] text-center font-bold">Cycle menstruel et Grossesses précoces</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Infection")}
            className="rounded-lg w-44  border border-[#DE1457] bg-white py-3 shadow-md">
                <Image source={require('./../../assets/images/infection.png')} className="ml-5 w-30 h-30 rounded-md"/>
                <Text className="text-[14px] text-center font-bold">Infections sexuellements transmissibles</Text>
            </TouchableOpacity>
        </View>    
    </SafeAreaView>
  )
}