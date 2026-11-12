
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import CadastroScreen from './Screens/CadastroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: '1',
      titulo: 'Fazer compras',
      descricao: 'Revisar os componentes e o useState',
      concluida: false
    },
    {
      id: '2',
      titulo: 'Lavar roupa',
      descricao: 'Finalizar o exercício da faculdade',
      concluida: true
    }
  ]);

  function adicionarTarefa(titulo, descricao) {
    const novaTarefa = {
      id: Date.now().toString(),
      titulo: titulo,
      descricao: descricao,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function alternarTarefa(id) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    ));
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Inicio">
          {(props) => (
            <HomeScreen
              {...props}
              tarefas={tarefas}
              alternarTarefa={alternarTarefa}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Cadastro">
          {(props) => (
            <CadastroScreen
              {...props}
              adicionarTarefa={adicionarTarefa}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}