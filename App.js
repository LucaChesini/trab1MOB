import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lista from './components/Lista';
import Adicionar from './components/Adicionar';
import Detalhes from './components/Detalhes';
import { CardProvider } from './components/CardContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Cards() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Listagem" component={Lista} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CardProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lista" component={Cards} options={{ headerShown: false }}/>
          <Tab.Screen name="Adicionar" component={Adicionar} />
        </Tab.Navigator>
      </NavigationContainer>
    </CardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});