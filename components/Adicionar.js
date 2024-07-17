import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import { useCardContext } from "./CardContext";
import axios from "axios";
import { Picker } from "react-native-web";


const Adicionar = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [responsaveis, setResponsaveis] = useState([]);
    const [responsavelSelecionado, setResponsavelSelecionado] = useState('');
    const { addCard } = useCardContext();

    useEffect(() => {
        axios.get('http://localhost:3000/api/usuarios')
        .then(response => {
            setResponsaveis(response.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    const adicionarCard = () => {
        if(titulo.trim() !== '') {
            addCard({ titulo, descricao, responsavelSelecionado });
            setTitulo('');
            setDescricao('');
            setResponsavelSelecionado('');
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
                <Picker
                    selectedValue={responsavelSelecionado}
                    onValueChange={(item) => setResponsavelSelecionado(item)}
                >
                    <Picker.Item label="Selecione um responsável" value="" />
                    {responsaveis.map(responsavel => (
                        <Picker.Item key={responsavel.id} label={responsavel.nome} value={responsavel.nome} />
                    ))}
                </Picker>
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