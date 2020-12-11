import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

export default function Routes() {
  <NavigationContainer>
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="SelectMapPosition" component={SelectMapPosition} />
      <Screen name="OrphanageData" component={OrphanageData} />
    </Navigator>
  </NavigationContainer>
}