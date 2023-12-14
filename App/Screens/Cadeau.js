import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
  } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  const CadeauScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    return (
      <SafeAreaView style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Your Results</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 14,
            }}
          >
            <Text>Share</Text>
            <AntDesign
              style={{ marginLeft: 4 }}
              name="sharealt"
              size={18}
              color="black"
            />
          </View>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text>Questions Answered</Text>
          <Text>(5/5)</Text>
        </View>
  
        <Pressable
          style={{
            backgroundColor: "white",
            height: 220,
            borderRadius: 7,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "magenta",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Score Card
          </Text>
          <FlatList
            numColumns={2}
            data={route.params.answers}
            renderItem={({ item, i }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                <Text>{item.question}</Text>
                {item.answer === true ? (
                  <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
                ) : (
                  <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
                )}
              </View>
            )}
          />
  
          <Pressable style={{backgroundColor:"green",padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}>
            <Text style={{color:"white",textAlign:"center"}}>Continue</Text>
          </Pressable>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default CadeauScreen;
  
  const styles = StyleSheet.create({});
  
  // import { View, Image, Button, Text, TouchableOpacity, Animated, ScrollView, Pressable } from 'react-native'
  // import React, { useRef, useState, useLayoutEffect } from 'react'
  // import { useNavigation } from '@react-navigation/native';
  // import { SafeAreaView } from 'react-native-safe-area-context';
  // import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
  // import {ArrowLeftIcon} from 'react-native-heroicons/solid'
  
  // export default function CadeauScreen() {
  //     const navigation = useNavigation();
  
  //   useLayoutEffect(() =>{
  //     navigation.setOptions({
  //       headerShown : false,
  //     });
  //   }, []);
  //   return (
  //     <SafeAreaView className="flex-1 bg-white relative">
  //         <View className="absolute w-full h-[100px] bg-[#DE1457]">
  //             <View className="flex-row justify-start top-12">
  //                 <TouchableOpacity onPress={()=> navigation.goBack()} 
  //                     className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
  //                       <ArrowLeftIcon size="20" color="#DE1457" />
  //                 </TouchableOpacity>
  //             </View>
  //        </View>
  //         <Text className="text-[22px] text-white font-bold mt-2 ml-36">Quiz SSR</Text>
  //         </SafeAreaView>
  //   )
  // }