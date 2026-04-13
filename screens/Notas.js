import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import style from '../css/Style-Global';
import { StyleSheet,  Text, View, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Listas from './Listas';
import Metas from './Metas';
export default function Notas() {

  useEffect(() => {
    NavigationBar.setBehaviorAsync("inset-swipe");
    // NavigationBar.setBehaviorAsync("overlay-swipe"); // permite abrir com swipe
    NavigationBar.setVisibilityAsync("hidden"); // esconde a barra
    NavigationBar.setBackgroundColorAsync("#000000");
  }, []);
  const Bottom = createBottomTabNavigator();
  return (

      <Bottom.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Bottom.Screen name="Notas" component={Nota} />
        <Bottom.Screen name="Listas" component={Listas} />
        <Bottom.Screen name="Metas" component={Metas} />
      </Bottom.Navigator>
  );
}

function Nota() {
  return(
    <View style={style.container}>
      <StatusBar hidden={true} />
      <View style={styles.caixa_superior}>
        <Text style={styles.boas_vindas}>Notas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  boas_vindas: {
    fontSize: 20,
    padding: 20,
    color: '#ffc680',
  },

  caixa_superior: {
    height: 80,
    backgroundColor: '#a88968',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#866644',
    borderWidth: 3,
  },

  caixa_inferior: {
    backgroundColor: '#a58d72',
    height: 80,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderColor: '#856a4d',
    borderWidth: 3,
  },

});
