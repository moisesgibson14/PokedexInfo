import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Move} from '../interfaces/PokemonInferfaces';

interface Props {
  moves: Move[];
}

const Moves = ({moves}: Props) => {
  return (
    <View style={styles.badgeContainer} testID="move-container">
      {moves.map(({move}) => (
        <View style={styles.item} key={move.name}>
          <Text style={styles.itemText}>{move.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    elevation: 3,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 10,
    padding: 5,
    fontWeight: 'bold',
  },
});

export default Moves;
