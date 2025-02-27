import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { vacationDestination, vacationPricing } from "./vacation";
import { Colors } from "react-native/Libraries/NewAppScreen";
import a from "../components/fruits";
import Counter from "./lab_3";
import { Link } from "expo-router";
import Lab4 from "./lab4";

export default function App() {
  type Person = {
    name: string;
    occupation: string;
    age: number;
    isStudent?: boolean;
    height: number;
  };

  interface Person2 {
    name: string;
    occupation: string;
    vacationDestination: string;
    vacationPricing: number;
  }
  const name: string = "John Cena";
  let occupation: string = "Software Developer";
  const age: number = 25;
  const isStudent: boolean = true;
  const height: number = 5.11;
  const data = {
    name: name,
    occupation: occupation,
    age: age,
    isStudent: isStudent,
    height: height,
  };

  const data2: Person = { name, occupation, age, isStudent, height };

  const data3: Person2 = {
    name,
    occupation,
    vacationDestination: vacationDestination("Paris"),
    vacationPricing: vacationPricing(2000),
  };

  const datalist = [data, data2];

  console.log(datalist[0].name);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {datalist[0].name}!</Text>
      <Text style={styles.txt}>
        You are going to {data3.vacationDestination}
      </Text>
      <Text style={styles.txt}>The price is {data3.vacationPricing}</Text>

      <TouchableOpacity
        style={{ backgroundColor: "#2d7ef7", padding: 10, borderRadius: 10 }}
        onPress={() => alert("Vacation Booked")}
      >
        <Text style={{ color: "white" }}>Click me</Text>
      </TouchableOpacity>

      <Text>{a}</Text>

      <TouchableOpacity
        style={{ backgroundColor: "#2d7ef7", padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}
      >
        <Text style={{ color: "white" }}>
          <Link href="/lab4">lab 4</Link>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#2d7ef7", padding: 10, borderRadius: 10, marginBottom: 10 }}
      >
        <Text style={{ color: "white" }}>
          <Link href="/lab5">lab 5</Link>
        </Text>
      </TouchableOpacity>

      <Counter />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "purple",
  },
  txt: {
    fontSize: 18,
  },
});
