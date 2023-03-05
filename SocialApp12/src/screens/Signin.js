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
} from 'native-base';


import { useSelector } from 'react-redux';
import { signIN } from '../store/slices/auth';
import propTypes from "prop-types"





const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  const doSignIn = () => {

    signIN({email, password})
  }



  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Text style={styles.heading}>Welcome to the Travel-gram Social App</Text>

      <Image
        source={Welcome}
        style={{width: null, height: 150, marginTop: 30}}
        resizeMode="contain"
      />

      <FormControl>
        <Stack space={5}>
          <Stack>
            <Input
              placeholder="enter your registerd email"
              value={email}
              style={{color: '#eee'}}
              onChangeText={text => setEmail(text)}
            />
          </Stack>
          <Stack>
            <Input
              placeholder="enter your registerd password"
              value={password}
              secureTextEntry={true}
              style={{color: '#eee'}}
              onChangeText={text => setPassword(text)}
            />
          </Stack>

          <Button rounded block onPress={doSignIn}>
            <Text>SignIn</Text>
          </Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{marginTop: 10}}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Do not have an account, SignUp here
            </Text>
          </TouchableOpacity>
        </Stack>
      </FormControl>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#fdcb9e',
    marginHorizontal: 5,
    marginTop: 30,
  },
  formItem: {
    marginBottom: 20,
  },
});
