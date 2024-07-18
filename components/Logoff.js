import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AuthContext from './auth';

function Logoff() {
    const { signOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Sair da conta</Text>
            <Button title="Sair " onPress={() => signOut()} />
        </View>
    );
}

export default Logoff;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(234, 234, 234)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});