<template>
  <div class="cards">
    <CardComponent 
    v-for="pokemon in pokemons" 
    :key="pokemon.id"
    :pokemon="pokemon"
    :class="{ opace: selectedId && pokemon.id !== selectedId }"
    @click="click(pokemon)"
    class="card">
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>
      <template v-slot:description>
        <div 
          v-for="(type, index) in pokemon.types" 
          :key="index">
          {{ type }}
        </div>
      </template>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';


export default {
    name: 'PokemonComponent',
    components: {
        CardComponent
    },
    props: {
        pokemons: {
            type: Array
        },
        selectedId: {
            type: Number
        }
    },
    methods: {
        click(pokemon) {
            this.$emit('chosen', pokemon);
        }
    }
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}

img {
  width: 100%;
}

.opace {
  opacity: 0.5;
}

.card:hover {
  opacity: 1;
}
</style>