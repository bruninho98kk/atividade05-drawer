import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GeradorScreen() {
    const [senha, setSenha] = useState('');

    
    const gerarSenha = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        const tamanho = 12;
        let senhaGerada = '';
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senhaGerada += caracteres[randomIndex];
        }
        setSenha(senhaGerada); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerador de Senhas</Text>
            <Text style={styles.subtitle}>Clique para gerar uma nova senha</Text>
            
            <TouchableOpacity style={styles.button} onPress={gerarSenha}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            {senha !== '' && (
                <Text style={styles.generatedPassword}>
                    Senha gerada: <Text style={styles.password}>{senha}</Text>
                </Text>
            )}
        </View>
    );
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
        color: '#FFA500',
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
    generatedPassword: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    password: {
        fontWeight: 'bold',
        color: '#FFA500',
    },
});