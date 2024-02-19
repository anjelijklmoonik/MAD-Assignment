import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return (
        <View>
            <Text style={style.title}>Registration</Text>
        </View>
    );
};

const style = StyleSheet.create ({
    title: {
        fontSize: 37,
        fontWeight: "bold",
        marginTop: 11,
        marginBottom: 14,
        color: '#000000',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
      },
});

export default Title;