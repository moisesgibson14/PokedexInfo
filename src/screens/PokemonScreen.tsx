import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
//Hooks
import {usePokemon} from '../hooks/usePokemon';
//Components
import PokemonDetails from '../components/PokemonDetails';
import {FadeInImage} from '../components/FadeInImage';
//Navigator
import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(id);
  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 10}}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        <Text style={{...styles.pokemonName, top: top + 40}}>{name}</Text>
        <Image
          source={require('../assets/openPokebola.png')}
          style={styles.pokeBall}
        />
        <FadeInImage style={styles.pokemonImage} uri={picture} />
      </View>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 400,
    zIndex: 999,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignItems: 'center',
  },
  pokeBall: {
    width: 250,
    height: 258,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 258,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonScreen;
