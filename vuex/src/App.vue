<template>
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>
  
  <div v-if="currentPost">
    <h2>
      {{ currentPost.title }}
    </h2>
    <h4>
      {{ currentPost.content }}
    </h4>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const posts = computed(() => store.state.posts.all);
const currentPost= computed(() => store.getters['posts/currentPost']);

const click = (post) => {
  store.commit('posts/setPostId', post.id);
}

const fetchData = () => {
  store.dispatch('posts/fetch')
}

onMounted(() => {
  fetchData();
})

</script>

<style scoped>

</style>
