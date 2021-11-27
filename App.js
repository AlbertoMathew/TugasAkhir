/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Home_Page from './src/screens/Home/Home_Page';
import Tambah_Division from './src/screens/Home/Tambah_Division';
import Info_Division from './src/screens/Home/Info_Division';
import Home_Players from './src/screens/Player/Home_Players';
import Tambah_Player from './src/screens/Player/Tambah_Player';
import Tambah_Player_Division from './src/screens/Home/Tambah_Player_Division';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Tab.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;

        if (route.name == 'Home') {
          iconName = 'home'
        } else if (route.name == 'Player') {
          iconName = 'user-plus'
        } else if (route.name == 'Profile') {
          iconName = 'user-alt'
        }

        color = focused ? '#f0f' : '#555'
        size = focused ? 25 : 20
        return (
          <FontAwesome5 name={iconName} size={size} color={color} />
        )
      }
    })} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Player" component={Player} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator initialRouteName="Home_Page">
      <Stack.Screen name="Home_Page" component={Home_Page} options={{ headerShown: false }} />
      <Stack.Screen name="Tambah_Division" component={Tambah_Division} options={{
        title: 'Tambah Divisi'
      }} />
      <Stack.Screen name="Info_Division" component={Info_Division} options={{
        title: 'Informasi Divisi'
      }} />
      <Stack.Screen name="Tambah_Player_Division" component={Tambah_Player_Division} options={{
        title: 'Tambah Player'
      }} />
    </Stack.Navigator>
  );
}

function Player() {
  return (
    <Stack.Navigator initialRouteName="Home_Players">
      <Stack.Screen name="Home_Players" component={Home_Players} options={{ headerShown: false }} />
      <Stack.Screen name="Tambah_Player" component={Tambah_Player} options={{
        title: 'Tambah Player'
      }} />
    </Stack.Navigator>
  )
}

export default App;
