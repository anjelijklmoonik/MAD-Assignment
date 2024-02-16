import React from "react";
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder: string;
}

const CustomInput = ({ placeholder }: InputProps) => {
    return <TextInput placeholder={placeholder} style={styles.input} />;
};

const styles = StyleSheet.create({
    input: {
        height: 55,
        marginBottom: 5,
        borderColor: "gray",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        width: '100%',
        fontSize : 14,
    },
});

export default CustomInput;