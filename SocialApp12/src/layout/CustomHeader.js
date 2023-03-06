import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  AddIcon,
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';

import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {signOut} from '../store/slices/auth';

const CustomHeader = ({navigation}) => {
  return (
    <>
      <HStack
        bg="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center">
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
            Social App LCO
          </Text>
        </HStack>
        <HStack>
          <Button
            transparent
            iconLeft
            onPress={() => navigation.navigate('AddPost')}>
            <AddIcon color="white" size="lg" />
          </Button>
          <Button transparent onPress={() => signOut()}>
            <Text
              style={{
                color: '#fdcb9e',
              }}>
              Add Post
            </Text>
            {/* <Icon name="log-out-outline"/> */}
          </Button>
          {/* <IconButton icon={<Icon as={MaterialIcons} name="logout" size="sm" color="white" />} /> */}
        </HStack>
      </HStack>
    </>
  );
};


export default CustomHeader;

const styles = StyleSheet.create({});
