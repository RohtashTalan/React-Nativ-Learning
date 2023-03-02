import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from './src'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
    <Index />
    </NativeBaseProvider>
  )
}

export default App
