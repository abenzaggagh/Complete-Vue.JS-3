<template>
    <div>
        {{ post.likes }} Likes
    </div>
    <button @click="like">Like</button>
    
    <HashtagComponent 
        v-for="hashtag in post.hashtags" 
        :key="hashtag" 
        :hashtag="hashtag"
    />
</template>

<script>
import HashtagComponent from './HashtagComponent.vue';
import { store } from './store';

export default {
    name: 'ControlsComponent',
    components: {
        HashtagComponent
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },

    setup(props) {
        const like = () => {
            store.like(props.post);
        }

        return {
            like
        }
    }


}
</script>

<style scoped>

</style>