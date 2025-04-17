import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GeradorScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerador de Senhas</Text>
            <Text style={styles.subtitle}>Clique para gerar uma nova senha</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFA500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
