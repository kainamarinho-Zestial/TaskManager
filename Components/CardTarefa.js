
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardTarefa({ tarefa, onPress }) {
  return (
    <View style={styles.card}>

      <View style={styles.conteudo}>
        <Text
          style={[
            styles.titulo,
            tarefa.concluida && styles.concluida
          ]}
        >
          {tarefa.titulo}
        </Text>

        <Text style={styles.descricao}>
          {tarefa.descricao}
        </Text>

        <Text style={styles.status}>
          {tarefa.concluida ? 'Concluída' : 'Pendente'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={onPress}
      >
        <Text style={styles.textoBotao}>
          {tarefa.concluida ? 'Desfazer' : 'Concluir'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },

  conteudo: {
    flex: 1,
    marginRight: 10
  },

  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2937'
  },

  descricao: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5
  },

  status: {
    fontSize: 12,
    color: '#2563EB',
    marginTop: 8
  },

  concluida: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF'
  },

  botao: {
    backgroundColor: '#DBEAFE',
    padding: 10,
    borderRadius: 8
  },

  textoBotao: {
    color: '#1D4ED8',
    fontWeight: 'bold',
    fontSize: 12
  }
});