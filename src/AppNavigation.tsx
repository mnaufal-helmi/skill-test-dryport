import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/screen/HomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigation;
