<template>
  <div class="search">
    <input :value="currentTag" @input="setHashtag" />
  </div>
  
  <div class="cards">
    <CardComponent v-for="post in filteredPosts" :key="post.id">
      <template v-slot:title>
        <div>{{ post.title }}</div>
      </template>
      <template v-slot:content>
        <div>{{ post.content }}</div>
      </template>
      <template v-slot:description>
        <ControlsComponent :post="post" />
      </template>
    </CardComponent>
  </div>
</template>

<script>
import { computed } from 'vue';
import CardComponent from './CardComponent.vue';
import ControlsComponent from './ControlsComponent.vue';
import { store } from './store';


export default {
  components: {
    CardComponent,
    ControlsComponent
  },

  setup() {
    const setHashtag = ($event) => {
      store.setHashtag($event.target.value)
    }

    

    return {
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag),
      setHashtag
    }
  }
}
</script>

<style>
.cards, .search {
  display: flex;
  justify-content: center;
}

.search > input {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid grey;
  min-width: 200px;
}
</style>
