import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CallAPI from "../components/callAPI";

const Lab5 = () => {
    const [showComponent, setShowComponent] = useState(false);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return (
        <View style={styles.container}>
            {showComponent && <CallAPI />}
            <Text style={styles.title}>Press the button to submit</Text>
            <TouchableOpacity onPress={toggleComponent} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",

    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default Lab5