<template>
    <div>
        {{ post.likes }} Likes
    </div>
    <button>Like</button>
    
    <HashtagComponent 
        v-for="hashtag in post.hashtags" 
        :key="hashtag" 
        :hashtag="hashtag" 
        @setHashtag="setHashtag"
    />
</template>

<script>
import HashtagComponent from './HashtagComponent.vue';

export default {
    name: 'ControlsComponent',
    components: {
        HashtagComponent
    },
    emits: ['setHashtag'],
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    setup(_props, context) {
        const setHashtag = (hashtag) => {
            context.emit('setHashtag', hashtag);
        }

        return {
            setHashtag
        }
    }
}
</script>

<style scoped>

</style>