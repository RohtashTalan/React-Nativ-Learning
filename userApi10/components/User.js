import { StyleSheet, View } from 'react-native'
import React from 'react'
import {
Box,
VStack,
Divider,
Image,
Text,
Heading
} from 'native-base'
import moment from 'moment/moment'

const User = ({details}) => {
  return (
    <View style={{
        justifyContent:"center",
        alignItems: 'center',
      }}>
      <Box border="1" borderRadius="md">
      <VStack space="2" pb="6" style={styles.card}>
      <Box px="4" pt="4">
          <Image 
          source={{
            uri:details.picture.large
          }}
          alt={details.name.first}
          style={styles.image}
          
          />
        </Box>
        <Box px="4" pt="2">
        <Heading size="md" color="#fff">{`${details.name?.title} ${details.name?.first} ${details.name?.last}`}</Heading>
        </Box>
        <Box px="4">
          <Text style={styles.text}>{details.cell}</Text>
        </Box>
        <Box px="4">
          <Text style={styles.text}>{details.email}</Text>
        </Box>
        <Box px="4">
          <Text style={styles.text}>Registered at {moment(details.registered?.date).format('dd-mm-yy')}</Text>
        </Box>
        <Box px="4">
          <Text style={styles.text}>Registered at {details.cell}</Text>
        </Box>
        <Box px="4">
          <Text style={styles.text}>Registered at {details.cell}</Text>
        </Box>


      </VStack>
    </Box>
    </View>
  )
}

export default User;



const styles = StyleSheet.create({
    card: {
    //   width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#eeeeee',
    },
  });