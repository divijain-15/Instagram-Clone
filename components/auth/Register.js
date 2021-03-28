import { NavigationContainer } from '@react-navigation/native';
import React, { Component,useState } from 'react'
import { View, Button, TextInput,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors';
import {firestore,auth} from "../../config/firebase"

const Register = ({navigation})=> {
  
       const [name,setName] = useState("");
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");


    const onSignUp = () => {
       
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firestore.collection("users")
                    .doc(auth.currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    
        return (
        <View style={styles.container}>
           
            <View style={styles.titleContainer} >
                <Text style={styles.title}>Social App</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Name"
                   
                    underlineColorAndroid='transparent'
                    value={name}
                    onChangeText={(name) =>setName(name)}
                />
              
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    value={email}
                    onChangeText={(email) =>setEmail(email)}
                />
              
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    value={password}
                    onChangeText={(password) => setPassword(password) }
                />
            
            </View>

            <TouchableOpacity 
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={onSignUp}
            >

            <Text style={styles.loginText}>Register</Text>
                
            </TouchableOpacity>


            <TouchableOpacity  onPress={()=>navigation.navigate("Login")}
                style={[styles.buttonContainer, styles.registerButton]}
            >
                <Text style={styles.btnText}>
                   Already a user ? Login 
                </Text>
            </TouchableOpacity>
        </View>    
           
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    titleContainer: {
        marginBottom: 40,
    },  
    title: {
        fontSize: 42,
        color: '#fff',
        fontWeight: 'bold',

        textShadowOffset: {width: 0,height: 1},
        textShadowRadius: 1,
        textShadowColor: 'black',

        textShadowOffset: {width: 1,height: 1},
        textShadowRadius: 1,
        textShadowColor: '#ccc',

        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 1,
        textShadowColor: 'black',
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
    successMsgContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#4F8A10',
        backgroundColor: "#DFF2BF" ,
        color: "#4F8A10",
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
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnForgotPassword: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 10,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: "#00b5ec",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    registerButton: {
        backgroundColor: Colors.lightPrimary,

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: "white",
        fontWeight: 'bold'
    }
}); 

export default Register
