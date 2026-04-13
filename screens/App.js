import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import styles from '../css/estilos';
import {  Text, View, TouchableOpacity } from 'react-native';

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


