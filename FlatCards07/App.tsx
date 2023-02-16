import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App