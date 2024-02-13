import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from "react-native"; //core component React Native
import DO from './assets/do.jpeg';
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Gambar from "./src/components/Gambar";

const App = () => {
  return (
    <View style= {style.container}>
      <Title/>
      <ScrollView style={style.container}>
        <Input placeholder = {"Siapa nama orang ini?"}/>
        <Image source={require('./assets/d.o.jpg')}
        style={{width: 300, height: 500}}/>
        <Text style={[style.text, style.box]}>Dia adalah seorang CEO, aktor, artis, penyanyi, penari, chef, dan model</Text>

        {/* <TextInput placeholder="Logo apakah ini?:" style={[style.input]}/> */}
        <Gambar/>
        <Text style={[style.text, style.box]}>Logo ini masih berkaitan dengan orang yang ada di atas.</Text>

        {/* <TextInput placeholder="Apakah ini masih orang yang sama?:" style={[style.input]}/> */}
        <Input placeholder="Siapa dia?"/>
        <Image source={DO}
        style={style.image}/>
        <Text style={[style.text, style.box]}>Dia memulai karirnya pada tahun 2012 bersama dengan teman-teman se grupnya</Text>

      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightyellow',
  },
  box: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    backgroundColor: 'lightyellow',
  },

  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    margin: 10,
    padding: 10
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    fontWeight: 'bold',
    margin: 25,
    padding: 10,
  }
});

export default App;