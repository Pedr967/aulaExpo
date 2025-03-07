import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

const data = Array.from({length: 50}, (_, i) => ({ id: i, name:`Item ${i + 1}
`}));

export default function App(){
  return(
    <FlatList 
      data={data} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  item:{
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#f0f0f0',
    bordeRadius: 8,
  },
  text:{ 
    fontSize: 16,
    fontWeight: 'bold'
  }
});
