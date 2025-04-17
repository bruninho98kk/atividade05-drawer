import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';

export default function CalculadoraScreen() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handlePress = (value) => {
        if (value === 'C') {
            setInput('');
            setResult(null);
        } else if (value === '=') {
            try {
                setResult(eval(input)); // Avalia a expressão matemática
            } catch (error) {
                setResult('Erro');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.display}>{result !== null ? result : input || '0'}</Text>
            <View style={styles.pressableGrid}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((value) => (
                    <Pressable
                        key={value}
                        style={styles.pressable}
                        onPress={() => handlePress(value)}
                    >
                        <Text style={styles.pressableText}>{value}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-end',
        padding: 16,
    },
    display: {
        fontSize: 48,
        color: '#333',
        textAlign: 'right',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
    },
    pressableGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    pressable: {
        backgroundColor: '#90EE90',
        width: '22%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 8,
    },
    pressableText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});