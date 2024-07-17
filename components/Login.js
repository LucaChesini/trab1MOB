import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import AuthContext from '../auth';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
        <Text>E-mail</Text>
        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            placeholder='Email'
            keyboardType="email-address"
        />
        <Text>Senha</Text>
        <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            secureTextEntry={true}
        />
        <Button title="Login" onPress={() => signIn({email, password})} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        width: '100%',
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
    },
});

export default Login;