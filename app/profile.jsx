import {    
    View,
    Text, 
    StyleSheet,
}  from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Perfil</Text>
            <Text style={styles.subtitle}>Aqui você pode ver suas informações de perfil.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', 
        marginBottom: 8, 
    },
    subtitle: {
        fontSize: 16,
        color: '#666', 
    },
});