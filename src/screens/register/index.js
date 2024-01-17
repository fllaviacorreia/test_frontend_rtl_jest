import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from '../styles';

export function RegisterScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu nome completo"
          onChangeText={(newText) => setFullName(newText)}
          defaultValue={fullName}
          secureTextEntry
        />
      </View>
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
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white' }}>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'white' }}>Retornar para Login</Text>
      </Pressable>
    </View>
  );
  }