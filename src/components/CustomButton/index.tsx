import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = () => {
    return (
        <View>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create ({
    button: {
        backgroundColor: "violet",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
});

export default CustomButton;