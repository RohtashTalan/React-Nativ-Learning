import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Container, Text } from 'native-base'


import { getPosts } from '../store/slices/post';
import { useDispatch, useSelector } from 'react-redux';


import EmptyContainer from '../components/EmptyContainer';
import Post from "../components/Post"





const Home = () => {
const dispatch = useDispatch();
const postState = useSelector((state)=> state.postState);
const authState = useSelector((state)=> state.authState);

console.log("post STate.....", postState);
console.log("authState State.....", authState);


  
useEffect(()=>{
  dispatch(getPosts())
},[])




  return (
    <SafeAreaView>
      <FlatList 
      data={postState.posts}
      keyExtractor={(item) => item.postId}
      renderItem={({item, index, separators}) =>(
        <Post item={item} userDetails={authState.user} key={item.postId} />
      ) }
      ListEmptyComponent={()=>(
        <Text size="2xl">No Post found</Text>
      )}
      >

      </FlatList>


    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    justifyContent: 'flex-start',
    padding: 4,
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});