<template>
    <div class="hashtag" @click="setHashtag">#{{ hashtag }}</div>
</template>

<script>
import { store } from './store';

export default {
    props: {
        hashtag: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const setHashtag = () => {
            store.setHashtag(props.hashtag);
        }

        return {
            setHashtag
        }
    }
}

</script>

<style scoped>

.hashtag {
    text-decoration: underline;
    margin: 5px;
}

.hashtag:hover {
    color: cornflowerblue
}

</style>