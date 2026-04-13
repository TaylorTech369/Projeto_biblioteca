import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import style from '../css/estilos';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Opcoes from './Opcoes';
import { Header } from '@react-navigation/stack';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          
        },
      }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Opções" component={Opcoes} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function Home() {
  useEffect(() => {
    NavigationBar.setBehaviorAsync("inset-swipe");
    // NavigationBar.setBehaviorAsync("overlay-swipe"); // permite abrir com swipe
    NavigationBar.setVisibilityAsync("hidden"); // esconde a barra
    NavigationBar.setBackgroundColorAsync("#000000");
  }, []);
  return (
    <View style={style.container}>
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


      </View>

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
