import {Intro, Login, Register} from './src/screens';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNav from './src/navigation/AppNav';

const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

export default App;
