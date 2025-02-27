import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import vacationDestinations, { VacationDestination } from "../constants/list_items";

const Lab4 = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

 
  const toggleSelection = (id: number) => {
    setSelectedDestinations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations</Text>
      
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: VacationDestination }) => (
          <TouchableOpacity
            style={[styles.destination, selectedDestinations.includes(item.id) ? styles.selected : {},]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature}{" "}
              {selectedDestinations.includes(item.id) && <Text>{"\u2705"}</Text>}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
   },
  title: {
     fontSize: 20,
     fontWeight: "bold",
     textAlign: "center", 
     marginBottom: 20 },

  destination: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  selected: {
    backgroundColor: "#d0f0c0", 
  },
  destinationText: { fontSize: 16 },
});

export default Lab4;
