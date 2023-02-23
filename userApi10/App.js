import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import User from './components/User';

import {Button, NativeBaseProvider} from 'native-base';
import axios from 'axios';

const App = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await axios.get('https://randomuser.me/api');
      const details = data.results[0];
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Text> Loading... </Text>
        </View>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <View>
            <User details={details} />
            <Button style={styles.button} size="lg"
            onPress={fetchDetails}>
              New User
            </Button>
          </View>
        </View>
      </NativeBaseProvider>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 50,
    paddingHorizontal: 10,
    fontSize:44,
    backgroundColor:"#4f8a8b"
  },
});
