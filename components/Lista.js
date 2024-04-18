import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useCardContext } from "./CardContext";
import { useContext } from "react";

const Item = ({card, navigation}) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalhes', {card: card})}>
        <View>
            <Text style={styles.tituloItem}>{card.title}</Text>
        </View>
    </TouchableOpacity>
);

const Lista = ({ navigation }) => {
    const {cards} = useCardContext();

    const renderItem = ({item}) => {
        return (
            <Item 
                card={item}
                navigation={navigation}
            />
        );
    }

    if (cards.length < 1) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerDentro}>
                    <Text style={styles.titulo}>Lista</Text>
                    <Text style={styles.semItens}>Sem itens adicionados</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDentro}>
                <Text style={styles.titulo}>Lista</Text>
                <FlatList 
                    data={cards}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
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
        paddingBottom: 0
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'rgb(167, 167, 167)',
        padding: 20,
        marginBottom: 10
    },
    tituloItem: {
        fontWeight: 'bold',
        overflow: 'hidden'
    },
    semItens: {
        textAlign: 'center',
        marginTop: 10
    }
})

export default Lista;