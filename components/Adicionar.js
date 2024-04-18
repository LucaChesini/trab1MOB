import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import { useCardContext } from "./CardContext";


const Adicionar = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const { addCard } = useCardContext();

    const adicionarCard = () => {
        if(titulo.trim() !== '') {
            addCard({ title: titulo, description: descricao });
            setTitulo('');
            setDescricao('');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDentro}>
                <Text style={styles.titulo}>Adicionar</Text>
                <TextInput 
                    style={styles.inputs} 
                    placeholder="Titulo"
                    value={titulo} 
                    onChangeText={setTitulo}
                />
                <TextInput 
                    multiline={true}
                    style={[styles.inputs, styles.inputLinhas]} 
                    placeholder="Descrição"
                    value={descricao} 
                    onChangeText={setDescricao}
                />
                <Button title="Enviar" onPress={adicionarCard}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(234, 234, 234)'
    },
    containerDentro: {
        padding: 34,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputs: {
        backgroundColor: 'white',
        marginBottom: 20,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(167, 167, 167)',
    },
    inputLinhas: {
        height: 100,
    },
})

export default Adicionar;