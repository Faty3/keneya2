import { View, Image, Text, TouchableOpacity, Linking, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Locate() {
    const navigation = useNavigation();
    const [mapRegion, setmapRegion] = useState({
        latitude: 12.6649209, 
        longitude: -7.9323632,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
});

    // const origin = { latitude: 12.6649209, longitude: -7.9323632 }; // Replace with your origin coordinates
    // const destination = { latitude: 12.5736256, longitude: -7.965181 }; // Replace with your destination coordinates
    // const destination1 ={ latitude: 12.6463201, longitude: -7.9996187 };
    // const destination2 ={ latitude: 12.6602778, longitude: -8.0134347 };
    // const destination3 ={ latitude: 12.6670742, longitude: -7.9391563 };

    // const openGoogleMapsNavigation = () => {
    //   const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&travelmode=driving`;
    //   Linking.openURL(url);
    // };

    // const openGoogleMapsNavigation1 = () => {
    //     const url1 = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination1.latitude},${destination1.longitude}&travelmode=driving`;
    //     Linking.openURL(url1);
    //   };

    //   const openGoogleMapsNavigation2 = () => {
    //     const url2 = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination2.latitude},${destination2.longitude}&travelmode=driving`;
    //     Linking.openURL(url2);
    //   };

    //   const openGoogleMapsNavigation3 = () => {
    //     const url3 = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination3.latitude},${destination3.longitude}&travelmode=driving`;
    //     Linking.openURL(url3);
    //   };

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
        <Text className="text-[20px] text-white font-bold mt-1 ml-20">Gélocalisation des structures d’offre de services de la SSR</Text>
        <View className=" rounded-xl border border-[#DE1457] bg-white shadow-md shadow-red-400 mt-2 mx-4">
            <MapView className="h-[160] m-1 W-[400]" style={{
            width: Dimensions.get("screen").width * 0.89,
            height: Dimensions.get("screen").height * 0.23,
            }}
            provider={PROVIDER_GOOGLE} 
            showsUserLocation={true}
            mapRegion={mapRegion}
            >

            </MapView>
        </View>
        <Text className="text-[17px] ml-3 mt-3">Veuillez choisir le centre le plus proche de vous</Text>
{/* 
        <View className="flex-row shadow-md shadow-red-400 mt-8">
            <View>
                <TouchableOpacity onPress={openGoogleMapsNavigation}
                className="rounded-lg w-40 border border-[#DE1457] bg-white items-center mb-4 mx-6 shadow-md">
                    <Image source={require('./../../assets/images/mariestop.png')} className=" w-32 h-32 rounded-lg"/>
                </TouchableOpacity>
                <Text className="text-[18px] text-center font-bold text-[#DE1457]">MARIE STOP</Text>
            </View>
            <View>
                <TouchableOpacity onPress={openGoogleMapsNavigation1}
                    className="rounded-lg w-40 border border-[#DE1457] bg-white items-center shadow-md mb-4 ">
                    <Image source={require('./../../assets/images/cesac.jpeg')} className="items-center w-32 h-32 rounded-lg"/>
                </TouchableOpacity>
                <Text className="text-[18px] text-center font-bold text-[#DE1457]">CESAC</Text>
            </View>
        </View>
        <View className="flex-row shadow-md shadow-red-400 mt-8">
            <View>
                <TouchableOpacity onPress={openGoogleMapsNavigation2}
                    className="rounded-lg w-40 border border-[#DE1457] bg-white items-center  mb-4 mx-6 shadow-md">
                    <Image source={require('./../../assets/images/arcad.png')} className="my-1 w-28 h-28 rounded-lg"/>
                </TouchableOpacity>
                <Text className="text-[18px] text-center font-bold text-[#DE1457]">ARCAD SANTE</Text>
            </View>
            <View>
                <TouchableOpacity onPress={openGoogleMapsNavigation3}
                className="rounded-lg w-40  border border-[#DE1457] bg-white items-center mb-4 py-1 shadow-md">
                    <Image source={require('./../../assets/images/croixrouge.png')} className="w-28 h-28 rounded-md"/>
                </TouchableOpacity>
                <Text className="text-[18px] text-center font-bold text-[#DE1457]">CROIX ROUGE</Text>
            </View>
        </View>     */}
        </SafeAreaView>
   )
}
