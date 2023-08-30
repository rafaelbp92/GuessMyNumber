import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, opponentsGuess}) {
    return <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>{opponentsGuess}</Text>
    </View>
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary700,
        borderWidth: 1,
        borderRadius: 40, 
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.secondary600,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.25
    }
});