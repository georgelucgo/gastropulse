import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { ChefHat } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ChefHat size={40} color="#E94E1B" strokeWidth={2.5} />
          <Text style={styles.title}>
            Gastro<span style={{ color: "#D7562A" }}>Pulse</span>
          </Text>
        </View>
        <FontAwesome6 name="bell" size={24} color="black" />
      </View>

      <View>
        <Text>Ola, mundo!</Text>
        <Text>Descubra os melhores pratos da sua região</Text>
        <Image></Image>

        <View style={styles.pesquisar}>
          <View>
            <Octicons name="search" size={24} color="black" />
            <TextInput placeholder="O que vamos comer?" style={styles.input} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  title: {
    color: "#3f110a",
    fontSize: 30,
    fontWeight: "bold",
  },

  hatIcon: {
    width: 30,
    height: 30,
  },

  input: {},

  pesquisar: {},
});
