<template>
    <img v-for="item in photos" :key="item.id" :src="item.thumbnailUrl" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import { computed, watchEffect } from 'vue';

const store = useStore();

const route = useRoute();

const photos = computed(() => store.state.photos.all);

watchEffect(() => {
    const id = route.params.id;

    if (!id) {
        return;
    }

    store.dispatch('photos/getByAlbum', id);
})

</script>

<style scoped>

</style>