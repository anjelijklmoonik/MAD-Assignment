import React from "react";
import {View, Text, TextProps, StyleSheet} from 'react-native';

interface CustomTextProps {
    text: string;
}

const CustomText: React.FC<CustomTextProps> = ({ text }) => {
    return <Text style={style.text}>{text}</Text>;
};

const style = StyleSheet.create ({
    text: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 20,
        color: '#000000',
    },
});

export default CustomText;