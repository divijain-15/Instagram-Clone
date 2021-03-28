import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image,ScrollView,ImgPicker,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Colors from '../../constants/Colors';

import * as ImagePicker from 'expo-image-picker';


const Add = ({ navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');


    })();
  }, []);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
   
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1 }}>
      

     

      <TouchableOpacity  style={[styles.buttonContainer, styles.loginButton]} onPress={() => pickImage()}>
        <Text  style={styles.loginText}>Pick Image from Gallery</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width:400,height:390,marginTop:40 }} />}

    <TouchableOpacity 
    style={[styles.buttonContainer, styles.loginButton]}
    onPress={() => navigation.navigate('Save', { image })}
>
   
        <Text style={styles.loginText}>
            Post
        </Text>
    
    </TouchableOpacity>
</View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
},
container: {
    flex: 1,
   
},

errorMsgContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D8000C',
    backgroundColor: "#FFBABA" ,
    color: "#D8000C",
    borderRadius: 25,
},
msgText: {
    fontSize: 15,
},
msgIcon: {
    width: 30,
    height: 30,
    // marginLeft: 15,
    justifyContent: 'center'
},
labelContainer: {
    alignSelf: 'flex-start',
    marginLeft: 16
},
labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    color: Colors.accent
},
inputContainer: {
    // borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    // borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#808080",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    paddingRight: 15
},
buttonContainer: {
    height: 45,
    marginTop:20,
    marginLeft:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
},
loginButton: {
    backgroundColor: Colors.brightBlue,
    shadowColor: "#808080",
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 10,
},
loginText: {
    color: 'white',
},

})

export default Add;