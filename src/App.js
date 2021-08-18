import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';

import StationsScreen from './screens/stations/stations_screen';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen COmponents</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const theme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme,
    myOwnColor: '#BADA55',
  },
};

function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <PaperProvider 
          theme={PaperDarkTheme}
        >
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={StationsScreen}
            options= {{
              title: "La Radio"
            }}
          />
        </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;