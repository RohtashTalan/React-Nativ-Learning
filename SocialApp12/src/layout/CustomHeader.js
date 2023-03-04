import { StyleSheet, View } from 'react-native'
import React from 'react'
import {
 
} from 'native-base'

import {connect } from 'react-redux'
import propTypes from 'prop-types'
import { signOut } from '../store/slices/auth'


const CustomHeader = ({signOut, authState, navigation}) => {
  return (
   <>
   <Header
   androidStausBarColor="#0f4c75"
   style={{
    backgroundColor: "#0f4c75"
   }}
  
   >
    <Body>
      <Title>Social App LCO</Title>
    </Body>
    <Right>
      <>
      <Button
      transparent
      iconLeft
      onPress={()=> navigation.navigate('AddPost')}
      >
        <Text
        style={{
          color:"#fdcb9e"
        }}
        >Add Post</Text>
      </Button>
      <Button
      transparent
      onPress={()=> signOut()}
      >
        <Icon name="log-out-outline"/>
      </Button>
      </>
    </Right>

   </Header>
   </>
  )
}

const mapStateToProps = (state) => ({
  authState: state.auth
})

const mapDispatchToProps = {
  signOut
}

CustomHeader.prototype = {
  signOut: propTypes.func.isRequired,
  authState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader)

const styles = StyleSheet.create({})