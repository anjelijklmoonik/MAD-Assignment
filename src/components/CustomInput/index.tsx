import React from "react";
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder: string;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
}

const CustomInput = ({ placeholder, keyboardType, ...props }: InputProps) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            keyboardType={keyboardType} 
            {...props} 
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        marginBottom: 5,
        borderColor: "gray",
        borderWidth: 1,
        padding: 8,
        borderRadius: 15,
        width: '100%',
        fontSize : 14,
    },
});

export default CustomInput;
