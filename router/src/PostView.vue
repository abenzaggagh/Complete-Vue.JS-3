<template>
    <h4>{{ post.title }}</h4>
    <p>
        {{ post.content }}
    </p>
</template>

<script>
import { computed } from 'vue';
import { usePosts } from './usePosts';
import { useRoute } from 'vue-router';

export default {
    setup() {

        const postStore = usePosts();
        const route = useRoute();
        const post = computed(() => postStore.posts.find(post => post.id === parseInt(route.params.id, 10)));

        return {
            post
        }
    }
}
</script>

<style>

</style>