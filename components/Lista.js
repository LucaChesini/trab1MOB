import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

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

const Item = ({card}) => (
    <View style={styles.item}>
        <Text style={styles.tituloItem}>{card.title}</Text>
    </View>
);

const Lista = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerDentro}>
                <Text style={styles.titulo}>Lista</Text>
                <FlatList 
                    data={dados}
                    renderItem={({item}) => <Item card={item} />}
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