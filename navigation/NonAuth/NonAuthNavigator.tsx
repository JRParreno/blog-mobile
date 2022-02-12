import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../../screens/NonAuth';
import { NonAuthParamList } from '../../types';

const Stack = createNativeStackNavigator<NonAuthParamList>();

export default function NonAuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}