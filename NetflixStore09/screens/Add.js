import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Add = () => {
  return (
    <View>
      <Text>Add</Text>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b262c",
    flex:1,
    justifyContent: 'flex-start'
  },
  heading: {
    textAlign: "center",
    color: "#00b7c2",
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20
  }


})