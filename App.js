/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from  'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store from "./src/store/configstore";
import  savePostScreen from "./src/screens/savePostScreen";
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
const backgroundColor='#cbe1ea';
const RootStack= createStackNavigator(
  {
    Home:savePostScreen,
  
  },
  {
    initialRouteName:'Home',
    headerLayoutPreset: 'center' ,
    navigationOptions: {
    headerStyle:{
      backgroundColor:backgroundColor
    }
  }
  
  });
  
  const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <Provider store={store.store}   >
               <PersistGate loading={null} persistor={store.persistor}>

         <AppContainer/>  
         </PersistGate>

        
       </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
