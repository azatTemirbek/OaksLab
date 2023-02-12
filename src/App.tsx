import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function PhaseScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function RandomFactScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>RandomFact Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Phase" component={PhaseScreen} />
        <Stack.Screen name="RandomFact" component={RandomFactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return <Router />;
}

export default App;
