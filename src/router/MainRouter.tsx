import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PhaseScreen} from '../screens/PhaseScreen';
import {RandomFactScreen} from '../screens/RandomFactScreen';

export function MainRouter() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Phase" component={PhaseScreen} />
        <Stack.Screen name="RandomFact" component={RandomFactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
