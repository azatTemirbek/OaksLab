import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {PhaseScreen} from '../screens/PhaseScreen';
import RandomFactScreen from '../screens/RandomFactScreen';

type RootStackParamList = {
  Phase: undefined;
  RandomFact: undefined;
};

export type StackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Phase" component={PhaseScreen} />
        <Stack.Screen name="RandomFact" component={RandomFactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
