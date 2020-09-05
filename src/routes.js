import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import Feed from './pages/Feed';

import logo from './assets/instagram.png';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <Navigator screenOptions={{
      headerTitle: <Image source={logo} />,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#F5F5F5',
      },
    }} >
      <Screen name="Feed" component={Feed} />
    </Navigator>
  );
}
