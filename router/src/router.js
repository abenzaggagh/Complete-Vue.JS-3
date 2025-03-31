import { createRouter, createWebHistory } from 'vue-router';
import CreatePostView from './CreatePostView.vue';
import PostsView from './PostsView.vue';
import PostView from './PostView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: PostsView,
            path: '/posts',
            children: [
                {
                    path: 'new',
                    component: CreatePostView
                },
                {
                    path: ':id',
                    component: PostView
                }
            ]
        }
    ]
})

export { router }