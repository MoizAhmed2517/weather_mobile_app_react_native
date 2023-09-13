import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ScreenRoutes from './navigation/ScreenRoutes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <NavigationContainer>
      <ScreenRoutes />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({})
