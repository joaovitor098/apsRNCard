import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{uri: props.item.img}}
        />
      </View>
      <View style={styles.conteudo}>
        <Text style={[styles.texto, styles.titulo]}>{props.item.nome}</Text>
        <Text
          style={[
            styles.texto,
            styles.descricao,
            {
              backgroundColor:
                props.item.descricao == 'Perecivel' ? 'yellow' : 'red',
            },
          ]}>
          {props.item.descricao}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    borderRadius: 8,
  },
  img: {
    margin: '5%',
    width: 150,
    height: 150,
  },
  texto: {
    textAlign: 'center',
    color: 'white',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 15,
    backgroundColor: 'red',
    marginHorizontal: '10%',
    borderRadius: 8,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
