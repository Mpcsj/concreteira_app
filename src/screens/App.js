/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import ButtonNextScreen from '../components/ButtonNextScreen'
import colors from '../styles/colors'
import getTitulo from '../util/obtem_frase'
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App= () => {
  return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.image_container}>
            <Image
              resizeMode={'contain'}
              style={styles.image}
              source={require('../../assets/images/img_valemix.png')}
            />
            </View>
            <View style={styles.title_container}>
              <Text style={styles.title_style}>{getTitulo()}</Text>
            </View>
            <ButtonNextScreen text='Executar'/>
            <ButtonNextScreen text='Cadastrar'/>
            </View>
        </ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image_container:{
    marginTop:10,
    marginHorizontal:10
  },
  image:{
      width:'100%',
      height:250,
      alignItems:'center',
      paddingHorizontal:20
  },
  title_container:{
    alignItems:'center',
    backgroundColor:colors.main_color,
    padding:20,
    marginTop:20,
    marginBottom:10
  },
  title_style:{
    justifyContent:'center',
    fontSize:30,
    fontWeight:'bold'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  }
});

export default App;
