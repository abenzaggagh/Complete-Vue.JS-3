<template>
    <div class="hashtag" @click="setHashtag">#{{ hashtag }}</div>
</template>

<script>
export default {
    props: {
        hashtag: {
            type: String,
            required: true,
        }
    },
    emits: ['setHashtag'],
    setup(props, context) {
        const setHashtag = () => {
            context.emit('setHashtag', props.hashtag)
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