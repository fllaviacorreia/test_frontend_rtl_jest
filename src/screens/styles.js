import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerInput: {
      padding: 10, 
      margin: 5,
    },
    title:{
      fontSize: 30,
    },
    input: {
      height: 40,
      width: 300,
      borderRadius: 10,
      backgroundColor: '#dfdfdf',
      padding: 10,
    },
    button: {
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#9f23c5',
      width: 300,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorMessage:{
      fontSize: 13,
      color: 'red',
    }
  });