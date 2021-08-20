import React from 'react';
import {View, Image, FlatList, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <View>
      <Image
        source={require('../assets/pokesearch.png')}
        style={styles.iconBg}
      />
      <View style={{alignItems: 'center'}}>
        <View>
          <Image
            source={require('../assets/pngegg.png')}
            style={{
              ...styles.title,
              top: top + 20,
              width: 300,
              height: 100,
              marginBottom: top + 30,
              ...styles.globalMargin,
              paddingBottom: 15,
              zIndex: 999,
            }}
          />
        </View>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
