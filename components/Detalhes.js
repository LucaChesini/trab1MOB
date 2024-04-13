import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

const Detalhes = ({ route }) => {
    const { card } = route.params;

    return (
        <SafeAreaView>
            <View>
                <Text>{card}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Detalhes;