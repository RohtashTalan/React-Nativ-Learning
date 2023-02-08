import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  useColorScheme,
  StyleSheet

} from 'react-native'

const App = () =>{
  const isDarkMode = useColorScheme() === 'dark';

  return(
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText:styles.darkText}>
          Random Color App
        </Text>
      </View>
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
    fontSize:32
  },
  darkText: {
    color: '#000000',
    fontSize:32
  }
})












export default App;