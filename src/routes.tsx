import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './screens/Landing';
import Profile from './screens/Profile';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown:false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}
 