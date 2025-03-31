import { createStore } from 'vuex';
import { _posts } from './posts';

const delay = () => new Promise(res => setTimeout(res, 1000))
const posts = {
    namespaced: true,
    state() {
        return {
            postId: null,
            all: []
        }
    },
    mutations: {
        setPostId(state, postId) {
            state.postId = postId;
        },
        setPosts(state, posts) {
            state.all = posts;
        }
    },
    actions: {
        async fetch(context) {
            await delay();
            context.commit('setPosts', _posts);
        }
    },
    getters: {
        currentPost(state) {
            return state.all.find(post => post.id === state.postId);
        }
    }
}


export const store = createStore({
    modules: {
        posts
    }
});