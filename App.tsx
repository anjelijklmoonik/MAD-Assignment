import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from "react-native";
import DO from './assets/do.jpeg';


const App = () => {
  return (
    <ScrollView style={style.container}>
      <View style={style.container}>
        <Text style={[style.title]}>Hello and Welcome</Text>

        <TextInput placeholder="Siapakah orang di bawah ini?:" style={[style.input]}/>
        <Image source={require('./assets/d.o.jpg')}
        style={{width: 300, height: 500}}/>
        <Text style={[style.text, style.box]}>Dia adalah seorang CEO, aktor, artis, penyanyi, penari, chef, dan model</Text>

        <TextInput placeholder="Logo apakah ini?:" style={[style.input]}/> 
        <Image source={{uri:'https://cdns-images.dzcdn.net/images/cover/74d58167a602d9a72452fe3760839da2/264x264.jpg',
        }}
        style={style.image}
        />
        <Text style={[style.text, style.box]}>Logo ini masih berkaitan dengan orang yang ada di atas.</Text>

        <TextInput placeholder="Apakah ini masih orang yang sama?:" style={[style.input]}/>
        <Image source={DO}
        style={style.image}/>
        <Text style={[style.text, style.box]}>Dia memulai karirnya pada tahun 2012 bersama dengan teman-teman se grupnya</Text>

      </View>
    </ScrollView>
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
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    margin: 10,
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