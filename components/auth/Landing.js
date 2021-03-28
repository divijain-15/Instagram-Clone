import React from 'react'
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <Text style={{fontSize:22,fontWeight:"bold",marginLeft:25,marginBottom:20}}>Welcome To Social App</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Register")}
                style={[styles.buttonContainer, styles.loginButton]}
               
            >

            <Text style={styles.loginText}>Register</Text>
                
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Login")}
                style={[styles.buttonContainer, styles.loginButton]}
               
            >

            <Text style={styles.loginText}>Login</Text>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft:30,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
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
    loginText: {
        color: 'white',
    },

})