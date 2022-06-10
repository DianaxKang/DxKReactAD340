import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomePage';
import PeopleList from './PeopleList';
import PersonDetails from './PersonDetails';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="PeopleList">
      <Stack.Screen name="PeopleList" component={PeopleList}/>
      <Stack.Screen name="PersonDetails" component={PersonDetails}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Navigator"
          component={Navigator}
          options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;