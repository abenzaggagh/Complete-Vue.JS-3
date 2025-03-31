import PhotosView from '@/views/PhotosView.vue'
import PhotoView from '@/views/PhotoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: PhotosView,
    children: [{
      path: 'albums/:id',
      component: PhotoView
    }]
  }],
})

export default router
