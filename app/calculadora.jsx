import React, { useState } from 'react';
import {    
    View,
    Text, 
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';

export default function CalculadoraScreen() {
    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');
    const [result, setResult] = useState(null);

    const soma = () => {
        setResult(Number(numA) + Number(numB));
    };

    const subtracao = () => {
        setResult(Number(numA) - Number(numB));
    };

    const multiplicacao = () => {
        setResult(Number(numA) * Number(numB));
    };

    const divisao = () => {
        if (Number(numB) !== 0) {
            setResult(Number(numA) / Number(numB));
        } else {
            setResult('Erro: Divisão por zero');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Calculadora</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o número A"
                keyboardType="numeric"
                value={numA}
                onChangeText={setNumA}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o número B"
                keyboardType="numeric"
                value={numB}
                onChangeText={setNumB}
            />
            <View style={styles.buttonContainer}>
                <Button title="Somar" onPress={soma} />
                <Button title="Subtrair" onPress={subtracao} />
                <Button title="Multiplicar" onPress={multiplicacao} />
                <Button title="Dividir" onPress={divisao} />
            </View>
            {result !== null && (
                <Text style={styles.resultText}>Resultado: {result}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', 
        marginBottom: 16, 
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 16,
    },
    resultText: {
        fontSize: 18,
        color: '#333',
        marginTop: 16,
    },
});