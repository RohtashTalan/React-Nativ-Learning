import { StyleSheet, ScrollView } from 'react-native'
import React ,{useState} from 'react'


import {
  Container,
  FormControl,
  Item,
  Input,
  Button,
  Text
} from 'native-base'


import AsyncStorage from '@react-native-async-storage/async-storage'

const Add = ({navigation}) => {
  const [name, setName] =useState('');
  const [totalNoSeason, setTotalNoSeason] = useState('')

   const addToList = async() => {
  try {
    

    const seasonToAdd = {
      id: shortid.generate(),
      name,
      totalNoSeason,
      isWatched: false,
    }

    const storedValue = await AsyncStorage.getItem('@season_list');
    const prevList = await JSON.parse(storedValue);
    
    if(!prevList){
      const newList = [seasonToAdd];
      await AsyncStorage.setItem('@season_list', JSON.stringify(newList))
    } else{
      prevList.push(seasonToAdd)
      await AsyncStorage.setItem('@season_list', JSON.stringify(prevList))
    }

    navigation.navigate('Home')

  } catch (error) {
    console.log(error);
    
  }
    }

  return (
    <ScrollView
      style={{
        backgroundColor: '#1b262c',
      }}
      contentContainerStyle={styles.container}>
      <Container style={styles.container}>
        <Text fontSize="3xl" style={styles.heading}>
          Add to watch List
        </Text>
        <FormControl>
          <Input mb="3" variant="rounded" placeholder="Season name"
          style={{color:"#eee"}}
          value={name} 
          onChangeText={(text)=> setName(text)}
          />
          <Input mb="3" variant="rounded" placeholder="Total Number of Seasons"
          style={{color:"#eee"}} 
          value={totalNoSeason} 
          onChangeText={(text)=> setTotalNoSeason(text)}
          />
          <Button size="sm"
          onPress={addToList}>
            Add
          </Button>
        </FormControl>

      </Container>
    </ScrollView>
  );
}

export default Add

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#1b262c",
    alignItems:"center",
    width:"100%"
  },
  heading: {
    textAlign: "center",
    color: "#00b7c2",
    marginHorizontal: 5,
    marginTop: 30,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20
  }


})