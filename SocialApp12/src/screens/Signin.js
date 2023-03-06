import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {
  Container,
  ScrollView,
  Input,
  Stack,
  FormControl,
  Image,
  Avatar,
  Button,
  Center,
} from 'native-base';


import { useDispatch, useSelector } from 'react-redux';
import { signIN } from '../store/slices/auth';
import propTypes from "prop-types"





const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const dispatch  = useDispatch()


  const doSignIn = () => {
    dispatch(signIN({email, password}))
  }



  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 10,
          paddingBottom: 30,
          backgroundColor: '#1b262c',
        }}>
          <View>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://i.ibb.co/3Shrsr9/undraw-welcome-cats-thqn.png',
              }}
              alt="Alternate Text"
              style={{flex:1, width:'100%', height:200, marginVertical:8}}
              mb="6"
            />
        </View>

        <FormControl>
          <Stack space={5}>
            <Stack>
              <Input
                placeholder="email"
                value={email}
                style={{color: '#eee'}}
                onChangeText={text => setEmail(text)}
              />
            </Stack>

            <Stack>
              <Input
                placeholder="password"
                value={password}
                style={{color: '#eee'}}
                onChangeText={text => setPassword(text)}
              />
            </Stack>

            <Button regular block onPress={() => doSignIn()}>
              <Text>Sign In</Text>
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={{marginTop: 10}}>
              <Text style={{color: '#fff', textAlign: 'center'}}>
                Do not have an account, SignUp here
              </Text>
            </TouchableOpacity>
          </Stack>
        </FormControl>
      </ScrollView>
    </>
  );
};

export default Signin;


