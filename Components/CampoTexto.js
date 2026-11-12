
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CampoTexto({
  placeholder,
  valor,
  onChangeText,
  multiline
}) {
  return (
    <TextInput
      style={[
        styles.input,
        multiline ? styles.textarea : null
      ]}
      placeholder={placeholder}
      value={valor}
      onChangeText={onChangeText}
      multiline={multiline}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15
  },

  textarea: {
    height: 110,
    textAlignVertical: 'top'
  }
});