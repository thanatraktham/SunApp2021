import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// import LoginScreen from './app/screens/LoginScreen';
// import SignupScreen from './app/screens/SignupScreen';
// import MainScreen from './app/screens/MainScreen';

import Routes from './app/Routes';

export default class App extends React.Component {
  // console.log("App executed");
  // const handlePress = () => console.log("clicked");
  // let x;
  // x.toString();
  render() {
    return (
      // <SafeAreaView style={styles.container}>
      //   <Text numberOfLines = {1} onPress = {handlePress}>555 https://open.spotify.com/track/5qsoeqn1bKqJzzmilZVEeG?si=fb2a6bc015b4437c</Text>
      //   <StatusBar style="auto" />
      // </SafeAreaView>
      // <LoginScreen/>
      <Routes/>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fc9ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});