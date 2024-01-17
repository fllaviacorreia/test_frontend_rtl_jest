import { View, Text, Pressable } from "react-native";
import useStore from "../../store/userStore";
import { styles } from "../styles";

export function ProfileScreen({navigation}) {
  const {email, password, type} = useStore((state) => state);

  const logout = useStore(state => state.login)

  function getOut(){
    logout();
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a)</Text>
      <Text style={styles.title}>email: {email}</Text>
      <Text style={styles.title}>senha: {password}</Text>
      <Text style={styles.title}>type: {type}</Text>
     
      <Pressable
        style={styles.button}
        onPress={() => getOut()}>
        <Text style={{ color: 'white' }}>Sair</Text>
      </Pressable>
    </View>

  );

  }