import {Intro, Login, Register} from './src/screens';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#10bbb3'}}>
      <StatusBar barStyle={'light-content'} />
      <Login />
    </SafeAreaView>
  );
};

export default App;
