import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{count}</Text>
            <TouchableOpacity onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    countText: {
        fontSize: 48,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10,
    },
    buttonText: {
        fontSize: 20,
    },
});

export default Counter;