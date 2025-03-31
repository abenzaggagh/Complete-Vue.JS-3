import { reactive } from 'vue';
import { posts } from './posts';

class Store {
    constructor() {
        this.state = reactive({
            posts: posts,
            currentTag: null
        })
    }

    setHashtag(hashtag) {
        this.state.currentTag = hashtag;
    }

    like(likedPost) {
        const postElement = this.state.posts.find(post => post.id === likedPost.id);

        if (postElement && postElement.isLiked === false) {
            postElement.isLiked = true;
            postElement.likes += 1;
        }
    }

    get filteredPosts() {
        if (store.state.currentTag) {
            return store.state.posts.filter(post => post.hashtags.includes(store.state.currentTag));
        }
    
        return store.state.posts;
    }
}

export const store = new Store();