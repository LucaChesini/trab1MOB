import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

const dados = [
    {
        id: 1,
        title: 'Teste 1'
    },
    {
        id: 2,
        title: 'Teste 2'
    },
]

const Item = ({card, navigation}) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalhes', {card: card.title})}>
        <View>
            <Text style={styles.tituloItem}>{card.title}</Text>
        </View>
    </TouchableOpacity>
);

const Lista = ({ navigation }) => {
    const renderItem = ({item}) => {
        return (
            <Item 
                card={item}
                navigation={navigation}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDentro}>
                <Text style={styles.titulo}>Lista</Text>
                <FlatList 
                    data={dados}
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
    }
})

export default Lista;