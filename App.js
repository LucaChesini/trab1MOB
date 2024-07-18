import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Lista from './components/Lista';
import Adicionar from './components/Adicionar';
import Detalhes from './components/Detalhes';
import { CardProvider } from './components/CardContext';
import ObtendoToken from './components/ObtendoToken';
import { useReducer, useState, useMemo, useEffect } from 'react';
import Login from './components/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from './auth';

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
    const [state, dispatch] = useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
            };
        }
      },
      {
        isLoading: true,
        userToken: null,
      }
    );

    useEffect(() => {
      const bootstrapAsync = async () => {
        let userToken;
        try {
          userToken = await AsyncStorage.getItem('@access_token');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      };
      bootstrapAsync();
    }, []);

    const authContext = useMemo(
      () => ({
        signIn: async (data) => {
          let myToken = 'token-autenticacao';
          await AsyncStorage.setItem('@access_token', myToken);
          dispatch({ type: 'SIGN_IN', token: myToken });
        },
        signUp: async (data) => {
          dispatch({ type: 'SIGN_IN', token: 'token-autenticacao' });
        },
      }),
      []
    );

  if (state.isLoading) {
    return <ObtendoToken />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <CardProvider>
        <NavigationContainer>
          {state.userToken == null ? (
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator>
              <Tab.Screen name="Lista" component={Cards} options={{ headerShown: false }}/>
              <Tab.Screen name="Adicionar" component={Adicionar} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </CardProvider>
    </AuthContext.Provider>
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