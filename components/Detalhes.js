import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Button } from "react-native";
import { useCardContext } from "./CardContext";
import { useNavigation } from '@react-navigation/native'

const Detalhes = ({ route }) => {
    const { card } = route.params;
    const { removeCard } = useCardContext();
    const navigation = useNavigation();

    const excluirCard = (cardId) => {
        removeCard(cardId);
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDentro}>
                <Text style={styles.titulo}>{card.titulo}</Text>
                <Text style={styles.descricao}>{card.descricao}</Text>
                {card.responsavelSelecionado ? (
                    <Text style={styles.responsavel}>Responsável: {card.responsavelSelecionado}</Text>
                ) : null}
                <Button title="Remover" onPress={() => excluirCard(card.id)}/>
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
        height: '100%',
        overflow: 'auto'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    descricao: {
        marginBottom: 10
    },
    responsavel: {
        fontWeight: 'bold',
        marginBottom: 15
    }
});

export default Detalhes;