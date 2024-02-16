import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = () => {
    return (
        <View>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create ({
    button: {
        backgroundColor: "#ff7400",
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
      },
});

export default CustomButton;