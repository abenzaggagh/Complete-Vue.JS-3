<template>
  <div class="cards">
    <CardComponent v-for="post in store.state.posts" :key="post.id">
      <template v-slot:title>
        <div>{{ post.title }}</div>
      </template>
      <template v-slot:content>
        <div>{{ post.content }}</div>
      </template>
      <template v-slot:description>
        <ControlsComponent :post="post" @setHashtag="setHashtag" />
      </template>
    </CardComponent>
  </div>
</template>

<script>
import { ref } from 'vue';
import CardComponent from './CardComponent.vue';
import ControlsComponent from './ControlsComponent.vue';
import { store } from './store';


export default {
  components: {
    CardComponent,
    ControlsComponent
  },

  setup() {
    const currentTag = ref(null);

    const setHashtag = (hashtag) => {
      currentTag.value = hashtag;
    }

    return {
      store,
      setHashtag
    }
  }
}
</script>

<style>
.cards {
  display: flex;
  justify-content: center;
}
</style>
