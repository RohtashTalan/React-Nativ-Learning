import { StyleSheet, View } from 'react-native'
import React from 'react'
import { VStack, Box, Divider, HStack, Avatar, Text, Image } from 'native-base';

const Post = ({item, userDetails}) => {
  return (
    <VStack
      space="4"
      rounded="md"
      m={1}
      padding={2}
      style={{
        backgroundColor: '#0f4c75',
        borderColor: '#0f4c75',
      }}>
      <HStack space={3}>
        <Avatar size="xs" source={{uri: item.userImage}} />
        <Text color={"#fff"}>{item.by}</Text>
      </HStack>

      <VStack space={3}>
      <Image size={"380"} source={{
          uri: item.picture
        }} alt={"Alternate Text "} />
        <Text  color={"#fff"}>{item.description}</Text>
      </VStack>
    </VStack>
  );
}

export default Post

const styles = StyleSheet.create({})