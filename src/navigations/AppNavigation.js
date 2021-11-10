import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContainer from '../screens/DrawerContainer';
import DogScreen from '../screens/DogApp';
import DiaryScreen from '../screens/Diary';
import DiaryDetailSreen from '../screens/DiaryDetail';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleContainerStyle: {
          flex: 1,
          flexDirection: 'row',
          padingTop: 'auto',
          paddingBottom: 'auto',
        },
        headerTitleStyle: {
          alignSelf: 'center',
        },
      }}
    >
      <Stack.Screen name="Dog" component={DogScreen} />
      <Stack.Screen name="Diary" component={DiaryScreen} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetailSreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
