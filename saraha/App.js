import {Intro} from './src/screens';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#10bbb3'}}>
      <StatusBar hidden={false} />
      <Intro />
    </SafeAreaView>
  );
};

export default App;
