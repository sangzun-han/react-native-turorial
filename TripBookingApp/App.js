import 'react-native-gesture-handler';
import React from 'react';
import {Image, Touchable, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

//Screens
import {Onboarding, DestinationDetail} from './screens';
import {COLORS, icons, SIZES} from './constants';

// Tabs
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Onboarding'}>
        {/* screen */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Pressed')}>
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
