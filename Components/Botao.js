
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ titulo, onPress, cor }) {
  return (
    <TouchableOpacity
      style={[styles.botao, cor ? { backgroundColor: cor } : null]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});