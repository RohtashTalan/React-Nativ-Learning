import React from "react";
import { 
  Text,
  StyleSheet,
  View,
  useColorScheme
 } from "react-native";


function App () : JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
  
  return (
    <View style={styles.container}>
      <Text style={isDarkMode? styles.whiteText : styles.darkText}>1st awasome app</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#ffffff'
  },
  darkText: {
    color: '#000000'
  }
})

export default App;