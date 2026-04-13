import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Cores:
//


export default function App() {

  useEffect(() => {
    NavigationBar.setBehaviorAsync("inset-swipe");
    // NavigationBar.setBehaviorAsync("overlay-swipe"); // permite abrir com swipe
    NavigationBar.setVisibilityAsync("hidden"); // esconde a barra
    NavigationBar.setBackgroundColorAsync("#000000");
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.caixa_superior}>

        <Text style={styles.boas_vindas}>Bem vindo ao Projeto Biblioteca</Text>

      </View>

      <View style={styles.caixa_inferior}>
        <TouchableOpacity
          style={{ padding: 15, backgroundColor: '#866644', borderRadius: 10 }}
          onPress={() => alert('Clicou!')}>
          <Text style={{ color: '#fdca8b' }}>Botão</Text>
        </TouchableOpacity>

        {/* <Text style={styles.texto_botao}>Botão Botão Botão Botão Botão</Text> */}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8c2',
    // backgroundColor: '#ffdda8',
    // backgroundColor: '#D8B589',
    justifyContent: 'space-between',
    // justifyContent: 'center',
    // paddingTop: 50,
  },

  boas_vindas: {
    // backgroundColor: '#d2a976',
    // fontSize: 32,
    fontSize: 20,
    padding: 20,
    // color: '#ae8048',
    color: '#ffc680',
  },

  caixa_superior: {
    // backgroundColor: '#edc98e',
    // backgroundColor: '#c19667',
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

  texto_botao: {
    fontSize: 20,
    color: '#fdca8b',
  }

});
