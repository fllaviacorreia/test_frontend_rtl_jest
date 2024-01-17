import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from '../styles';
import useStore from '../../store/userStore';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const login = useStore(state => state.login)

  function clean(){
    setEmail("");
    setPassword("");
    setErrorMessage("");
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

  function goToRegister(){
    clean();
    navigation.navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        <Text style={{ color: 'white' }}>Entrar</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => goToRegister()}>
        <Text style={{ color: 'white' }}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}
