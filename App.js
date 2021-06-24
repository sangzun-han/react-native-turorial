import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello TodoList!</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;
