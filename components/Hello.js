import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

export default function Hello( props) {

    function login(){
        alert("alert login function")
    }
   
  return (
    <View style={styles.container}>
      <Text>{props.data}</Text>
      <Button title='press me'   onPress={login}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  