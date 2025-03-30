<template>
  <PokemonComponent 
    :pokemons="pokemons"
    :selectedId="selectedId"
    @chosen="fetchEvolutions" 
  />

  <PokemonComponent :pokemons="evolutions" />
</template>

<script>
import PokemonComponent from './PokemonComponent.vue';

const api = 'https://pokeapi.co/api/v2/pokemon';
const pokemonIDS = [1, 4, 7];

export default {
  name: 'App',
  components: {
    PokemonComponent
  },
  data() {
    return {
      selectedId: null,
      pokemons: [],
      evolutions: []
    }
  },
  async created() {
    this.pokemons = await this.fetchData(pokemonIDS);
  },
  methods: {

    async fetchData(ids) {
      const responses = await Promise.all(ids.map(id => fetch(`${api}/${id}`)));

      const data = await Promise.all(responses.map(data => data.json()));

      return data.map(json => ({
        id: json.id,
        name: json.name,
        sprite: json.sprites.other['official-artwork'].front_default,
        types: json.types.map(type => type.type.name)
      }));
    },

    async fetchEvolutions(pokemon) {
      this.selectedId = pokemon.id;
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
    } 
  }
}
</script>

<style scoped>

</style>
