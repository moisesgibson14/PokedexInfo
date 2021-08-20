import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../interfaces/PokemonInferfaces';
import {FadeInImage} from './FadeInImage';
import {ProgressBar} from 'react-native-paper';
import Stats from './Stats';
import Moves from './Moves';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  const getProgressNumber = (number: number): number => {
    return parseInt(`0.${number}`);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={{...styles.container, marginTop: 390}}>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />
        </ScrollView>
        <Text style={styles.title}>Tipo:</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Peso:</Text>
        <Text style={styles.regularText}>{pokemon.weight} KG</Text>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Habilidades</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{...styles.container}}>
        <Text style={styles.title}>Movimientos:</Text>
        <Moves moves={pokemon.moves} />
      </View>
      <View style={{...styles.container, marginBottom: 50}}>
        <Text style={styles.title}>Estadisticas:</Text>
        <View>
          <Stats stats={pokemon.stats} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default PokemonDetails;
