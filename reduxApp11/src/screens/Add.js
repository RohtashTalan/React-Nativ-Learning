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



const Add = ({navigation}) => {


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