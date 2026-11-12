
import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet
} from 'react-native';

import Botao from '../Components/Botao.js';
import CampoTexto from '../Components/CampoTexto.js';

export default function CadastroScreen({
  navigation,
  adicionarTarefa
}) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  function salvarTarefa() {
    if (titulo.trim() === '') {
      Alert.alert('Atenção', 'Digite o título da tarefa.');
      return;
    }

    adicionarTarefa(titulo.trim(), descricao.trim());

    setTitulo('');
    setDescricao('');

    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Nova tarefa
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados da atividade.
      </Text>

      <Text style={styles.label}>
        Nome da tarefa
      </Text>

      <CampoTexto
        placeholder="Ex: Ver o filme que lançou esse mês"
        valor={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>
        Descrição
      </Text>

      <CampoTexto
        placeholder="Descreva sua atividade..."
        valor={descricao}
        onChangeText={setDescricao}
        multiline={true}
      />

      <Botao
        titulo="Salvar tarefa"
        onPress={salvarTarefa}
      />

      <Botao
        titulo="Voltar"
        cor="#6B7280"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    paddingTop: 55
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A'
  },

  subtitulo: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
    marginBottom: 30
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8
  }
});