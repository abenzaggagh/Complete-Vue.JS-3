import { reactive } from 'vue';
import { posts } from './posts';

class Store {
    constructor() {
        this.state = reactive({
            posts: posts
        })
    }
}

export const store = new Store();