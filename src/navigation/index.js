import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import { RegisterScreen } from '../screens/register';
import { HomeScreen } from '../screens/home';
import { ProfileScreen } from '../screens/profile';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
            <Stack.Screen name="Cadastro" options={{headerShown: false}} component={RegisterScreen}/>
            <Stack.Screen name="Home"  options={{headerShown: false}}component={HomeScreen}/>
            <Stack.Screen name="Perfil" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}