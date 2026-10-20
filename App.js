
import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Switch,
  Button, Alert
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

function App() {
  const [texto, setTexto] = useState("");
  const [numero, setNumero] = useState("");
  const [ativo, setAtivo] = useState(false);
  const [valor, setValor] = useState(0);
  const [opcao, setOpcao] = useState("X");

  function confirmar() {
    Alert.alert(
    "Dados cadastrados",
    `Nome: ${texto}
Idade: ${numero}
Sexo: ${
      opcao === "A"
        ? "Feminino"
        : opcao === "B"
        ? "Masculino"
        : "Não selecionado"
    }
Limite: ${valor}
Estudante: ${ativo ? "Sim" : "Não"}`
  );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Cadastro</Text>

      <Text style={styles.p}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={texto}
        onChangeText={setTexto}
        style={styles.input}
      />

      <Text style={styles.p}>Idade</Text>
      <TextInput
        placeholder="Digite sua idade"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.p}>Sexo</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={opcao}
          onValueChange={(itemValue) => setOpcao(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione" value="X" />
          <Picker.Item label="Feminino" value="A" />
          <Picker.Item label="Masculino" value="B" />
        </Picker>
      </View>

      <Text style={styles.p}>Limite</Text>
      <Text style={styles.textoValor}>
        Valor selecionado: {valor}
      </Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={valor}
        onValueChange={setValor}
        minimumTrackTintColor="#5267DF"
        maximumTrackTintColor="#D6DCE8"
        thumbTintColor="#5267DF"
      />

      <View style={styles.linhaSwitch}>
        <Text style={styles.textoSwitch}>É estudante?</Text>
        <Switch
          value={ativo}
          onValueChange={setAtivo}
          trackColor={{ false: "#D6DCE8", true: "#A8B3F5" }}
          thumbColor={ativo ? "#5267DF" : "#F4F4F4"}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Confirmar"
          onPress={confirmar}
          color="#5267DF"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#24324A",
    marginBottom: 24,
    textAlign: "center",
  },

  p: {
    fontSize: 16,
    fontWeight: "600",
    color: "#24324A",
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    width: "100%",
    height: 48,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#D6DCE8",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    color: "#24324A",
    marginBottom: 12,
  },

  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D6DCE8",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    marginBottom: 12,
  },

  picker: {
    width: "100%",
    height: 50,
    color: "#24324A",
  },

  textoValor: {
    fontSize: 15,
    color: "#5267DF",
    fontWeight: "600",
    marginBottom: 6,
  },

  slider: {
    width: "100%",
    height: 40,
  },

  linhaSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 12,
    marginBottom: 18,
  },

  textoSwitch: {
    fontSize: 16,
    fontWeight: "600",
    color: "#24324A",
    flex: 1,
    marginRight: 12,
  },

  botao: {
    marginTop: 12,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default App;
