import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import ScreenLoginPage from './app/screen/ScreenLoginPage';

export default class App extends React.Component {
  render() {

    return (

     <ScreenLoginPage />

    );

  }

}
