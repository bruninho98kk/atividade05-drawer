import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Bem-Vindo ao APP</Text>
                <Text style={styles.subtitleText}>Acesse as funcionalidades no botão abaixo</Text>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.openDrawer()}
            >
                <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
        
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
    button: {
        backgroundColor: '#FFA500',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 6, 
        borderWidth: 1,
        borderColor: '#000', 
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10, 
    },
    titleText: {
        paddingTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', 
        marginBottom: 8, 
    },
    subtitleText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 20,
        paddingBottom: 20
    },
});
