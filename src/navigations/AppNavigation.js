import React from 'react';
import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContainer from '../screens/DrawerContainer';
import DogScreen from '../screens/DogApp';
import DiaryScreen from '../screens/Diary';
import DiaryDetailSreen from '../screens/DiaryDetail';
import linking from './linking';

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
      <Stack.Screen name="Diary" component={DiaryScreen} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetailSreen} />
    </Stack.Navigator>
  );
}

function DogNavigator() {
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
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Dog"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Dog" component={DogNavigator} />
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer linking={linking}>
      <DrawerStack name="DrawerStack" component={DrawerStack}/>
    </NavigationContainer>
  );
}
