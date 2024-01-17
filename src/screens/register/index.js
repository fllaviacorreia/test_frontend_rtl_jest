import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from '../styles';
import useStore from '../../store/userStore';

export function RegisterScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const login = useStore(state => state.login)

  function clean(){
    setEmail("");
    setPassword("");
    setErrorMessage("");
  }

  function goToLogin(){
    clean();
    navigation.navigate('Login')
  }

  function handleSubmit(){
    if(email.length > 0 && password.length > 0){
      console.log(email, password)
      try{
        login("0125", "user", "default", email, password);
      }catch(e){
        console.log(e)
      }
      clean();
      navigation.navigate('Home');
      
    }else{
      setErrorMessage("Email ou Senha não inseridos.");
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>        
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu email"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
          secureTextEntry
        />
      </View>
      {
        errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : <></>
      }
      <Pressable
        style={styles.button}
        onPress={() => handleSubmit()}>
        <Text style={{ color: 'white' }}>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => goToLogin()}>
        <Text style={{ color: 'white' }}>Retornar para Login</Text>
      </Pressable>
    </View>
  );
  }