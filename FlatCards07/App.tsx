import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App