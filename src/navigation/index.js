import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import { RegisterScreen } from "../screens/register";
import { HomeScreen } from "../screens/home";
import { ProfileScreen } from "../screens/profile";
import useStore from "../store/userStore";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const isSignedIn = useStore((state) => state.isSignedIn);
  console.log(isSignedIn,"status")
  return (
    <Stack.Navigator initialRouteName="Login">
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Stack.Screen name="Perfil" component={ProfileScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Cadastro"
            options={{ headerShown: false }}
            component={RegisterScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
