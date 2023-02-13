import { View, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {
Text,
Container,
Content,
Header,
Body,
Title,
Card,
H1,
H3,
Button
} from 'native-base';
import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';


const itemArray = new Array(9).fill('empty')


export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if(winMessage){
      return Snackbar.show({
        text: winMessage,
        backgroundColor: "#000",
        textColor: "#fff"
      })
    }

    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = isCross ? 'cross': 'circle';
      setIsCross(!isCross)
    } else {
      return Snackbar.show({
        text: "Postion is already filled",
        backgroundColor: "red",
        textColor: "#fff"
      })
    }

    checkIsWinner()
  }

  const reloadGame = () =>{
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  }

  const checkIsWinner = () => {
    const  winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];

    for(let logic of winnerLogic){
      const [a,b,c] = logic;
      if(itemArray[a] === itemArray[b] && itemArray[a] === itemArray[c] && itemArray[a] !== 'empty'){
        itemArray[a] === 'cross' ? setWinMessage('Cross wins the Game') : setWinMessage('Circle wins the Game')
      }
    }

return false;

}



  return (
    <>
<Container style={{backgroundColor: "#333495", padding:15}}>
  <Header>
    <Body>
      <Title>TicTacToe Game</Title>
    </Body>
  </Header>
  <Content>
    <View style={styles.grid}>
      {itemArray.map((item, index)=>(
        <TouchableOpacity
        style={styles.box}
        key={index}
        onPress={()=> changeItem(index)}>
          <Card style={styles.card}>
            <Icons name={item} />
          </Card>
        </TouchableOpacity>
      ))}
    </View>
    
    {winMessage ? (
      <View>
        <H1 style={styles.message}>
          {winMessage} </H1>
          <Button 
          onPress={reloadGame}
          block
          rounded
          primary          
          >
            <Text>Reload Game</Text>
          </Button>
      </View>
    ):(
      <View>
        <H3 style={styles.message}>
          {isCross ? 'Cross': 'Circle'} Turn
        </H3>
      </View>
    )}
  </Content>
</Container>
    </>
  )
}


const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  box: {
    width:' 33%',
    marginBottom:6,
  },
  card:{
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    marginTop: 20,
    backgroundColor: "#4652B3",
    paddingVertical:10,
    marginVertical:16
  }

})