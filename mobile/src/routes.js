import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './pages/Detail';
import Incidents from './pages/Incidents';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Incidents" component={Incidents} />
        <Screen name="Detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  );
}
