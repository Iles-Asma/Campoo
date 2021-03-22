import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, SafeAreaView} from "react-native";
// import { StackNavigator } from "react-navigation";
import HeaderReturn from "../../../app/components/header/HeaderReturn";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigations from '../../routes/Navigations'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// export default StackNavigator({
//   App: {
//     screen: App,
//   },
//   Result: {
//     screen: App,
//   },
// });

export default class PhotoProfiles extends React.Component {
  render() {
    return (

      <SafeAreaView
        style={{
          backgroundColor: "#E5E5E5",
          justifyContent: "center",
          flex : 1
        }}
      >
        <HeaderReturn style={style.arroow} onPress={() => navigation.goBack()} />  

        <View style={style.containerText}>
          <Text style={style.texte}>Change ton avatar</Text>
          <Text style={style.texteTwo}>Selectionne une illustration </Text>
          <Text style={style.texteTwo}>parmi celle ci-dessous !</Text>
          
        </View>

        <View style={style.containerItems}>

        <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Moby.png")}
          ></Image>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Pixelle.jpg")}
          ></Image>
                  </TouchableOpacity>

          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Hope.jpg")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Axolotl.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/La_Carotte.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/A_Sad_Tomat.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Frank.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Boy_l.jpg")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Cotton.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Bigbalo_l.jpg")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Craboo.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={style.items}
            source={require("../../../assets/images/Craboo.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image
            style={style.items}
            source={require("../../../assets/images/Craboo.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image
            style={style.items}
            source={require("../../../assets/images/Pigeon.png")}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            style={style.items}
            source={require("../../../assets/images/Pigeon.png")}
          ></Image>
          </TouchableOpacity>


          

          {/* <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View>
          <View style={style.items}></View> */}
        </View>

        

      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  containerItems: {
    flexWrap: "wrap",
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "black",
    justifyContent: "center",
 
  },
  items: {
    height: 100,
    width: 100,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 60,
    margin: 10,
  },
  texte: {
    textAlign: "center",
    fontSize: 26,
    color: "#4D3D64",
    fontWeight: "bold",
    marginTop : 30
    // fontFamily: "Montserrat"
  },

  texteTwo: {
    textAlign: "center",
    fontSize: 16,
    color: "#4D3D64",
    // fontFamily: "Montserrat"
  },

  containerText: {
    marginBottom:10,
  },

  arroow : {
    position : "relative", 
    top : 100
  }




});


