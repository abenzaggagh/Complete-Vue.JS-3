<template>
    <LayoutView>
      <template v-slot:header>
        Header
      </template>
      <template v-slot:sidebar>
        <AlbumComponent v-for="album in albums" :key="album.id" :album="album"></AlbumComponent>
      </template>
      <template v-slot:content>
        <RouterView></RouterView>
      </template>
    </LayoutView>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import LayoutView from './LayoutView.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import AlbumComponent from '../components/AlbumComponent.vue';
  
  const store = useStore();
  
  const albums = computed(() => store.state.albums.all);
  
  onMounted(() => {
    store.dispatch('albums/fetch')
  });
  
  
  </script>
  
  
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  </style>
  