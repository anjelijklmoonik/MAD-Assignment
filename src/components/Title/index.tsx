import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return (
        <View>
            <Text style={style.title}>Basic Component in RN</Text>
        </View>
    );
};

const style = StyleSheet.create ({
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: 'black',
        margin: 10,
      },
});

export default Title;