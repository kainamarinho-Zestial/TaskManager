
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import Botao from '../Components/Botao';
import CardTarefa from '../Components/CardTarefa';

export default function HomeScreen({
  navigation,
  tarefas,
  alternarTarefa
}) {
  const concluidas = tarefas.filter(
    tarefa => tarefa.concluida
  ).length;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Task Manager
      </Text>

      <Text style={styles.subtitulo}>
        Organize suas atividades!
      </Text>

      <View style={styles.resumo}>
        <Text style={styles.resumoTexto}>
          Total de tarefas: {tarefas.length}
        </Text>

        <Text style={styles.resumoTexto}>
          Concluídas: {concluidas}
        </Text>
      </View>

      <Botao
        titulo="+ Nova tarefa"
        onPress={() => navigation.navigate('Cadastro')}
      />

      <Text style={styles.listaTitulo}>
        Minhas tarefas
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTarefa
            tarefa={item}
            onPress={() => alternarTarefa(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhuma tarefa cadastrada.
          </Text>
        }
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A8A'
  },

  subtitulo: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 5
  },

  resumo: {
    backgroundColor: '#DBEAFE',
    padding: 15,
    borderRadius: 12,
    marginTop: 25,
    marginBottom: 10
  },

  resumoTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginVertical: 3
  },

  listaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    color: '#1F2937'
  },

  vazio: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 30
  }
});