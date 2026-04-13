import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import style from '../css/Style-Global';
import { StyleSheet,  Text, View, TouchableOpacity } from 'react-native';

export default function Listas() {

  useEffect(() => {
    NavigationBar.setBehaviorAsync("inset-swipe");
    // NavigationBar.setBehaviorAsync("overlay-swipe"); // permite abrir com swipe
    NavigationBar.setVisibilityAsync("hidden"); // esconde a barra
    NavigationBar.setBackgroundColorAsync("#000000");
  }, []);

  return (
    <View style={style.container}>
        <Text style={styles.boas_vindas}>Listas</Text>
    </View>
  );
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
