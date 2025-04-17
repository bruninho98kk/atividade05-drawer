import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const subtrair = () => {
        setContador(contador - 1);
    };

    const somar = () => {
        setContador(contador + 1);
    };

    const resetar = () => {
        setContador(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.counterText}>
                Valor atual: <Text style={styles.counterValue}>{contador}</Text>
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={subtrair} style={styles.button}>
                    <Text style={styles.buttonText}>Subtrair</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={somar} style={styles.button}>
                    <Text style={styles.buttonText}>Somar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={resetar} style={styles.button}>
                    <Text style={styles.buttonText}>Resetar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Fundo preto
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFA500', // Laranja
        marginBottom: 20,
    },
    counterText: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
    },
    counterValue: {
        fontWeight: 'bold',
        color: '#FFA500',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        margin: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFA500',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Contador;