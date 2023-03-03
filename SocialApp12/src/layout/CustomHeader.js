import { StyleSheet, View } from 'react-native'
import React from 'react'
import {
  Text,
  Button,
  Icon,
} from 'native-base'

import {connect } from 'react-redux'
import propTypes from 'prop-types'
import { signOut } from '../store/action/auth'


const CustomHeader = ({signOut, authState, navigation}) => {
  return (
    <View>
      <Text>CustomHeader layout</Text>
    </View>
  )
}


export default CustomHeader

const styles = StyleSheet.create({})