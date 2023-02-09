import React, { useState } from "react";
import { 
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable

 } from "react-native"

 import DiceOne from "./assests/img/dice1.png"
 import DiceTwo from "./assests/img/dice2.png"
 import DiceThree from "./assests/img/dice3.png"
 import DiceFour from "./assests/img/dice4.png"
 import DiceFive from "./assests/img/dice5.png"
 import DiceSix from "./assests/img/dice6.png"




const App = () => {
  const [uri, setUri] = useState(DiceFive);
  const [uriTwo, setUriTwo] = useState(DiceOne);

  const playButtonTapped = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  switch (randomNumber) {
    case 1:
      setUri(DiceOne)
      break;
    case 2:
      setUri(DiceTwo)
      break;
    case 3:
      setUri(DiceThree)
      break;
    case 4:
      setUri(DiceFour)
      break;
    case 5:
      setUri(DiceFive)
      break;
    case 6:
      setUri(DiceSix)
      break;
  
    default:
      setUri(DiceTwo)
      break;
  }

  const randomNumberTwo = Math.floor(Math.random() * 6) + 1;

  switch (randomNumberTwo) {
    case 1:
      setUriTwo(DiceOne)
      break;
    case 2:
      setUriTwo(DiceTwo)
      break;
    case 3:
      setUriTwo(DiceThree)
      break;
    case 4:
      setUriTwo(DiceFour)
      break;
    case 5:
      setUriTwo(DiceFive)
      break;
    case 6:
      setUriTwo(DiceSix)
      break;
    default:
      setUriTwo(DiceFour)
      break;
  }
}


  return (
    <>
      <View style={styles.container}>
        <View style={styles.alignImages}>
          <Image style={styles.image} source={uri} />
          <Image style={styles.image} source={uriTwo} />
        </View>
        <Pressable onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </Pressable>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475e",
    borderWidth: 3,
    fontWeight : "bold",
    borderRadius: 10
  },
  alignImages: {
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection: "row",
    width:"70%",
    marginHorizontal: 5,
    marginBottom: 30
  }

  
})




export default App;