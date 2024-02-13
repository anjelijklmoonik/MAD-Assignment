import React from "react";
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

const Gambar = () => {
    return (
        <View>
            <Image source={{uri:'https://cdns-images.dzcdn.net/images/cover/74d58167a602d9a72452fe3760839da2/264x264.jpg',
            }}
            />
        </View>
    );
};

const style = StyleSheet.create ({
    image: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        margin: 10,
        padding: 10
      },
});

export default Gambar;