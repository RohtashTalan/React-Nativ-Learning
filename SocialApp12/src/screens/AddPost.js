import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  FormControl,
  ScrollView,
  Image,
  Icon,
  Stack,
  Input,
  TextArea,
  Button,
} from 'native-base'


import storage from '@react-native-firebase/storage';

import ProgressBar from  'react-native-progress/Bar';
import {launchImageLibrary} from 'react-native-image-picker';
import {options} from '../utils/options'

import {useDispatch} from 'react-redux';

const AddPost = ({navigation}) => {
  const dispatch  = useDispatch();
    const [image, setImage] = useState('https://git-scm.com/images/logos/logomark-orange@2x.png');
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    const [imageUploading, setImageUploading] =useState(false);
    const [uploadStatus, setUploadStatus] = useState(null)


    const chooseImage = async() => {
      const result = await launchImageLibrary(options);
      if (result.didCancel) {
        ToastAndroid.show('user canceled.. Image Not Selected',ToastAndroid.LONG);
      } else if (result.error) {
        ToastAndroid.show('ImagePicker Error',ToastAndroid.LONG);
      } else if (result.errorMessage) {
        console.log("ImagePicker ErrorMessage",  result.errorMessage);
      } else{
        uploadImage(result.assets[0])
        
      }
    }

    
    const uploadImage = async (response) => {
      setImageUploading(true)
      const reference = storage().ref(response.fileName)
      const task = reference.putFile(response.uri);
      task.on('state_changed', (taskSnapshot) => {
        const percentage = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000
        setUploadStatus(percentage)
      });

      task.then(async () => {
        const url = await reference.getDownloadURL();
        setImage(url)
        setImageUploading(false);
        setUploadStatus(null)

      })
    }

    const addPost = () => {

    }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#1b262c',}}>
      {image && (
        <Image source={{uri: image}} style={styles.image} resizeMode="center" alt='post image'/>
      )}
      <FormControl>
        <Stack space={3}>
          <Stack>
            <Input
              placeholder="location"
              value={location}
              style={{color: '#eee'}}
              onChangeText={text => setLocation(text)}
            />
          </Stack>

          {imageUploading ? (
            <ProgressBar progress={uploadStatus} style={styles.progress} />
          ) : (
            <Button
              regular
              bordered
              block
              iconLeft
              info
              onPress={chooseImage}>
              <Text
                style={{
                  color: '#fdcb9e',
                }}>
                Choose Image
              </Text>
            </Button>
          )}

          <Stack>
            <TextArea
              rowSpan={5}
              placeholder="Some description..."
              value={description}
              style={{color: '#eee'}}
              onChangeText={text => setDescription(text)}
            />
          </Stack>

          <Button regular block onPress={addPost}>
            <Text>Add Post</Text>
          </Button>
        </Stack>
      </FormControl>
    </ScrollView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  formItem: {
    marginBottom: 20,
  },
  icon: {fontSize: 20, color: '#fdcb9e'},
  image: {width: null, height: 200, marginVertical: 15},
  progress: {width: null, marginBottom: 20},
});
