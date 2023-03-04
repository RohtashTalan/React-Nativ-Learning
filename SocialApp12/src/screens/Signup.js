import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {Container, ScrollView, Input, Stack, FormControl, Image, Avatar, Button} from 'native-base';

import storage from '@react-native-firebase/storage';

import ProgressBar from  'react-native-progress/Bar';
import ImagePicker from 'react-native-image-picker';
import {options} from '../utils/options'

import propTypes from 'prop-types'
import { signUp } from '../store/slices/auth';
import {connect} from 'react-redux';

const chooseImage = async() => {

}

const doSignUp = async() => {

}




const Signup = () => {
    const [image, setImage] = useState('https://git-scm.com/images/logos/logomark-orange@2x.png');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [instaUserName, setInstaUserName] = useState('');
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')

    const [imageUploading, setImageUploading] =useState(false);
    const [uploadStatus, setUploadStatus] = useState(null)






  return (
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal:10, paddingBottom:30, backgroundColor: '#1b262c',}}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={chooseImage}>
            <Avatar size="lg" source={{uri: image}}  />
          </TouchableOpacity>
        </View>

        {imageUploading && (
          <ProgressBar progress={uploadStatus} style={styles.progress} />
        )}

        <FormControl>
          <Stack space={5} >
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                placeholder="name"
                value={name}
                style={{color: '#eee'}}
                onChangeText={text => setName(text)}
              />
            </Stack>

            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                placeholder="email"
                value={email}
                style={{color: '#eee'}}
                onChangeText={text => setEmail(text)}
              />
            </Stack>

            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                placeholder="password"
                value={password}
                secureTextEntry={true}
                style={{color: '#eee'}}
                onChangeText={text => setPassword(text)}
              />
            </Stack>

            <Stack style={styles.formItem}>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                placeholder="Instagram user name"
                value={instaUserName}
                style={{color: '#eee'}}
                onChangeText={text => setInstaUserName(text)}
              />
            </Stack>

            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                placeholder="Your Short Bio"
                value={bio}
                style={{color: '#eee'}}
                onChangeText={text => setBio(text)}
              />
            </Stack>

            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                placeholder="country"
                value={country}
                style={{color: '#eee'}}
                onChangeText={text => setCountry(text)}
              />
            </Stack>

            <Button regular block onPress={doSignUp}>
              <Text>SignUp</Text>
            </Button>
          </Stack>
        </FormControl>
      </ScrollView>
  );
};

const mapDispatchToProps = {
  signUp: (data) => signUp(data)
}

Signup.propTypes = {
  signUp: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Signup);




const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  progress: {width: null, marginBottom: 20},
  formItem: {
    marginBottom: 20,
  },
});