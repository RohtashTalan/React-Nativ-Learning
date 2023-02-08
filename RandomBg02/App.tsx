import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  StatusBar

} from 'react-native'

const App = () =>{
  const isDarkMode = useColorScheme() === 'dark';

  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBG = () =>{
    let color = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`;

    setRandomColor(color);

  }

  return(
    <>
    <StatusBar backgroundColor= {randomColor} />

      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
        <Text style={isDarkMode ? styles.whiteText:styles.darkText}>
          Tap Me
        </Text></TouchableOpacity>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  whiteText: {
    color:'#ffffff',
    fontSize:32,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
  },

  darkText: {
    color: '#000000',
    fontSize:32
  }
})











export default App;