import React, {useState} from "react";


import { 
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button

 } from "react-native";

 import {RNCamera} from "react-native-camera";


const PendingView = () => (
  <View
  style={
    {flex: 1,
    justifyContent: "center",
  alignItems: "center",
}
  }>
    <Text style={{fontSize:30, color: "red"}}>
      Loading....
    </Text>

  </View>
);





const App = () => {
  const [image, setImage] = useState(null);

  const takePicture = async(camera) =>{
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
      
    } catch (error) {
      console.warn(error);
      
    }
  }

  return(<>
  
  
<View style={styles.container}>
  {image ? (
    <View style={styles.preview}>
    <Text style={styles.camtext}>Here is your New Profile pic</Text>
    <Image style={styles.clicked} source={{uri: image, width:'100%', height:'80%'}}/>
    <Button
    title="Click new Image"
    onPress={()=>{
      setImage(null)

    }}
    ></Button>
    </View>
  ) : (
    <RNCamera
    style={styles.preview}
    type={RNCamera.Constants.Type.back}
    captureAudio={false}
    flashMode={RNCamera.Constants.FlashMode.off}
    androidCameraPermissionOptions={{
      title: "Permission to use camera",
      message: "Longer Text to use camera",
      buttonPositive: "OK",
      buttonNegative: "Cancel"
    }}
    androidRecordAudioPermissionOptions={{
      title: "Permission to use audio",
      message: "Longer Text to use audio",
      buttonPositive: "OK",
      buttonNegative: "Cancel"
    }}
    >
      {({camera, status})=>{
        if(status !== 'READY')return <PendingView />
        return(
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems:"center"

          }}>
            <TouchableOpacity
            onPress={()=>takePicture(camera)}
            >
              <Text style={styles.capture}>SNAP</Text>
            </TouchableOpacity>
          </View>
        )
      }}

    </RNCamera>
  )}
 
 
</View>
  
  </>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"#0A79DF"
  },
  preview: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",

  },
  capture:{
    flex:0,
    backgroundColor: "orange",
    padding: 20,
    alignSelf: "center",
    borderRadius: 10
    
  },
  camtext: {
    backgroundColor: "#3498D8",
    color: "#fff",
    width: "100%",
    textAlign: "center",
    paddingVertical:10,
    fontSize: 25
  },
  clicked: {
    width:300,
    height: 300,
    borderRadius:150
  }

})



export default App;