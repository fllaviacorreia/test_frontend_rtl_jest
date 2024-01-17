import { View, Text, Pressable } from "react-native";
import { styles } from "../styles";
import useStore from "../../store/userStore";

export function HomeScreen({navigation}) {
  const email = useStore((state) => state.email);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a), {email}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Perfil')}>
        <Text style={{ color: 'white' }}>Ver meu perfil</Text>
      </Pressable>
    </View>

  );
  }