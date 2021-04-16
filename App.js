import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import Card from './components/Card';
import Api from './src/config/api';

const App = () => {
  const [items, setItems] = useState('');
  useEffect(() => {
    Api.get('/items')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
        <Card item={{
          nome: item.description,
          descricao: item.category,
          img: item.image
        }} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cantainer: {
    flex: 1
  },
});

export default App;
