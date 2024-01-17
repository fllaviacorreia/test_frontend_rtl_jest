import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from '../styles';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white' }}>Entrar</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{ color: 'white' }}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}
