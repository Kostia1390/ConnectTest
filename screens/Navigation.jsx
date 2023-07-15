import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Chat } from './Chat';
import { StartSelection } from './StartSelection';
import { FirstScreen } from './FirstScreen';
import { Home } from './Home';
import { EnterPassword } from './EnterPassword';
import { NewPage } from './NewPage';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        <Stack.Screen
          name="EnterPassword"
          component={EnterPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewPage" component={NewPage} options={{ headerShown: false }} />
        <Stack.Screen
          name="StartSelection"
          component={StartSelection}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
