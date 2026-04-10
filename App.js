import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.caixa_do_meio}>

        <text style={styles.boas_vindas}>Bem vindo ao Projeto Biblioteca</text>
      <StatusBar style="auto" />

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
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 50,
  },

  boas_vindas: {
    // backgroundColor: '#d2a976',
    fontSize: 32,
    paddingTop: 10,
    // color: '#ae8048',
    color: '#ffc680',
  },

  caixa_do_meio: {
    // backgroundColor: '#edc98e',
    // backgroundColor: '#c19667',
    backgroundColor: '#a88968',
    width: '55vw',
    height: '100vh',
    alignItems: 'center',
    borderColor: '#866644',
    borderWidth: 3,
  },
  
});
