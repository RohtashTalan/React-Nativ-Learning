import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {addSeason} from "./store/slices/list"
import { useDispatch } from 'react-redux'

const index = () => {
    const dispach = useDispatch();

    const handleAction = () => {
        dispach(addSeason("rohtash"));
    }
    // console.log(addSeason("hello"));

    handleAction();
  return (
    <View>
      <Text>Rohtash</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})