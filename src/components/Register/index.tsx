import React from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from "react-native"; //core component React Native
import Title from "./src/components/Title";
import CustomText from "./src/components/CustomText";
import CustomInput from "./src/components/CustomInput";
import CustomButton from "./src/components/CustomButton";

const App: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Title/>
        <CustomText text="Name"/>
        <CustomInput placeholder = {"Masukkan nama lengkap anda"}/>
        <CustomText text="Username"/>
        <CustomInput placeholder = {"Masukkan username anda"}/>
        <CustomText text="Email"/>
        <CustomInput placeholder = {"Masukkan email anda"}/>
        <CustomText text="Address"/>
        <CustomInput placeholder = {"Masukkan alamat anda"}/>
        <CustomText text="Phone Number"/>
        <CustomInput placeholder = "Masukkan Nomor telepon anda" keyboardType="numeric"/>
        <CustomButton/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box: {
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default App;