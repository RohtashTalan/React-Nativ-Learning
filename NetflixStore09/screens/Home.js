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
      AddIcon,
      CircleIcon,
      CheckCircleIcon,
      CheckIcon
     } from 'native-base'


import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused } from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const isFocused = useIsFocused();
    const [listOfSeason, setListOfSeason] = useState([])

    const getList = async () => {
      const storedValue = await AsyncStorage.getItem('@season_list');
      const prevList = await JSON.parse(storedValue);
      if(prevList){
       setListOfSeason(prevList);
      }
    }

    const deleteSeason = async(id) => {
        const newList = await listOfSeason.filter((list) => list.id !== id)

        await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
        setListOfSeason(newList)
    }

    const markComplete = async(id) => {
       const newArr = listOfSeason.map((list)=>{
        if(list.id===id){
          list.isWatched = !list.isWatched
        }
        return list
       });

       await AsyncStorage.setItem('@season_list', JSON.stringify(newArr));
       setListOfSeason(newArr)

    }



    useEffect(()=>{
      getList();
    },[isFocused])



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
        <Container style={styles.container}>
          <Text fontSize="lg" style={styles.heading}>
            Next Series to Watch
          </Text>
          {listOfSeason.map(item => (
            <View key={item.id} 
            style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center", backgroundColor:"#eee89f", padding:6, borderRadius:8, width:300, marginBottom:8}}>
              <View style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center", gap:5}}>
              <DeleteIcon onPress={()=>{
                deleteSeason(item.id)
              }} size="lg" color="red.800" />
              <QuestionIcon onPress={()=>{
                navigation.navigate('Edit', {item})
              }}
              size="lg" color="blue.800" />
              </View>
             
              <View>
              <Text color={'#fff'} fontWeight="800" fontSize="xl">{item.name}</Text>
              <Text color={'#000'} marginLeft="3" fontSize="xs">{item.totalNoSeason} season to watch</Text>
              </View>
             
              <View >
              {item.isWatched ? <CheckCircleIcon onPress={()=>{
                markComplete(item.id)
              }} size="lg" color="coolGray.700"/>:<CheckIcon onPress={()=>{
                markComplete(item.id)
              }} size="lg" color="coolGray.700"/>}
              
              </View>
              

            </View>
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