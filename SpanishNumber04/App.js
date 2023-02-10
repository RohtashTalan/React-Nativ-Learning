import React from "react";


import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
  } from 'react-native';

import Sound from 'react-native-sound'

const soundList = [
  require("./sound/one.wav"),
  require("./sound/two.wav"),
  require("./sound/three.wav"),
  require("./sound/four.wav"),
  require("./sound/five.wav"),
  require("./sound/six.wav"),
  require("./sound/seven.wav"),
  require("./sound/eight.wav"),
  require("./sound/nine.wav"),
  require("./sound/ten.wav"),
];




const App = () => {

  const playSound = (sound) => { 
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if(err){
        console.log("Not Able To Play Sound");
      }
    });

    setTimeout(()=>{
      soundVar.play()
    }, 1000);

    soundVar.release();
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./sound/logo.png')} />
        <View style={styles.gridContainer}>
          {soundList && soundList.map((sound)=> (
            <TouchableOpacity 
             key={sound}
             style={styles.box}
             onPress={()=>{playSound(sound)}}
             >
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#1b262c"
  },

  logo: {
    alignSelf: "center",
    marginTop: 15
  },
 gridContainer: {
  flex: 1,
  margin: 5,
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  justifyContent: "space-around"


 },
 box:{
  height: 110,
  alignItems: "center",
  justifyContent: "center",
  width: "46%",
  marginVertical: 6,
  backgroundColor: "#0f4c75",
  borderRadius: 8
 },
 text: {
  fontSize: 50,
  color: "#ff4301"
 }

});







export default App;