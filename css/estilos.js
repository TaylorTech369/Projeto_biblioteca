import { StyleSheet } from 'react-native';


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

export default styles;