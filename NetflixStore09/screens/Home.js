import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


import { Fab,
     Icon,
      Text,
      Button,
      Container,
      HStack,
      Center,
      DeleteIcon,
      QuestionIcon,
      AddIcon
     } from 'native-base'


import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation, route}) => {
    const [listOfSeason, setListOfSeason] = useState([])

    const getList = async () => {
      const storedValue = await AsyncStorage.getItem('@season_list');
      const prevList = await JSON.parse(storedValue);
      if(prevList){
       setListOfSeason(prevList);
      }
    }

    const deleteSeason = async() => {
        
    }

    const markComplete = async() => {

    }


    useEffect(()=>{
      getList();
    },[])



  return (
    <ScrollView
      style={{
        backgroundColor: '#000',
      }}
      contentContainerStyle={styles.container}>
      <Text style={styles.heading} fontSize="xl">
        List of Seasons goes here
      </Text>
      {listOfSeason.length !== 0 ? (
        <Container>
          <Text fontSize="lg" style={styles.heading}>
            Next Series to Watch
          </Text>
          {listOfSeason.map(item => (
            <HStack key={item.id} 
            style={{
              flex:1,
              flexDirection:"row",
              alignContent:"space-between"
            }}>
              <DeleteIcon color="red.600" />

              <Text color={'#fff'}>{item.name}</Text>

            </HStack>
          ))}
        </Container>
      ) : (
        <Text fontSize="lg" style={{color: '#eee', textAlign: 'center'}}>
          Watchlist is empty. please add season
        </Text>
      )}

      <Fab
      style={{backgroundColor: '#5067ff'}}
      onPress={() => navigation.navigate('Add')}
        >
        <AddIcon 
        color="red.800" fontSize="lg"/>
      </Fab>
    </ScrollView>
  );
}

export default Home

const styles = StyleSheet.create({
    emptyContainer: {
        backgroundColor: '#1b262c',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#1b262c',
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        textAlign: 'center',
        color: '#00b7c2',
        marginVertical: 15,
        marginHorizontal: 5
    },
    actionButton: {
        marginLeft: 5
    },
    seasonName: {
        color: '#fdcb9e',
        textAlign: 'justify'
    },
    listItem: {
        marginLeft: 0,
        marginBottom:20
    }

})