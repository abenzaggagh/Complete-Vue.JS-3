<template>
    <h2>Posts</h2>
    <RouterLink to="/posts/new">New Post</RouterLink>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
        </li>
    </ul>
    
    <RouterView></RouterView>
</template>

<script>
import { usePosts } from './usePosts';

export default {
    setup() {
        const postStore = usePosts();

        return {
            posts: postStore.posts
        }
    }
}
</script>

<style>

</style>