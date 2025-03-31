import { reactive } from 'vue';
import { posts } from './posts';


export function usePosts() {
    const postsElements = reactive(posts);

    const addPost = (post) => {
        postsElements.push(post);
    }

    return {
        posts: postsElements,
        addPost
    };
}