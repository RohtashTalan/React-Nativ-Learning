import { View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import React, { useState } from 'react'

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';
import { SafeAreaView } from 'react-native';


const itemArray = new Array(9).fill('empty')



const App = () => {
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
    
    if(!(itemArray.includes('empty'))){
      setWinMessage("Match Draw")
    }

return false;

}




  return (
      
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{margin:10}}>
            <Text style={{fontSize:30, textAlign:'center'}}>TicTacToe Game</Text>
          </View>
        <View style={{marginBottom:16}}>
          <View style={styles.grid}>
            {itemArray.map((item, index) => (
              <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={() => changeItem(index)}>
                <View style={styles.card}>
                  <Icons name={item} />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {winMessage ? (
            <View>
              <Text style={styles.message}>{winMessage} </Text>
              <TouchableOpacity onPress={reloadGame} block rounded primary>
                <Text style={{fontSize:30, textAlign:'center', backgroundColor:"#a852B3", marginHorizontal:60, padding:10, borderRadius:8}}>Reload Game</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{marginTop:16}}>
              <Text style={[styles.turn]}>
                {isCross ? <Icons name={'cross'} /> : <Icons name={'circle'} />} Turn
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
    
  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333495',
  },
  grid: {
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
  },
  turn: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    marginTop: 20,
    backgroundColor: "#4652B3",
    paddingVertical:10,
    marginVertical:16
  }

})