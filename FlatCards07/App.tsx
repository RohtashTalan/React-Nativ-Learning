import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import FlatCards from './components/FlatCards'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App