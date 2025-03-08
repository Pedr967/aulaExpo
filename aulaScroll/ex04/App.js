import React,{ useState } from 'react';
import { StyleSheet, Text, View,TextInput, KeyboardAvoidingView, ScrollView, Button} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <KeyboardAvoidingView behavoir="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Formulário</Text>
          {Array.from({length: 10}).map((_, index) =>(
            <TextInput
            key={index}
            style={styles.input}
            placeholder={`Campo ${index + 1}`}
            value={input}
            onChangeText={setInput}
            />
          ))}
        <Button title="Enviar" onPress={() => alert('Dados enviados!')}/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer:{
    padding: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  input:{
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
