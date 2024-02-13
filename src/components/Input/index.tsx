import React from "react";
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
    return <TextInput placeholder={placeholder} style={styles.input} />;
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        fontWeight: 'bold',
        margin: 25,
        padding: 10,
    },
});

export default Input;
