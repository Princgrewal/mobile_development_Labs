"use client";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const CallAPI = () => {
    const [data, setData] = useState<{ title: string; body: string } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {data && (
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.body}>{data.body}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    body: {
        fontSize: 16,
    },
});

export default CallAPI;