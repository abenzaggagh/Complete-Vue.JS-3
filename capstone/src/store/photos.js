export const photos = {
    namespaced: true,
    state() {
        return {
            all: [],
            cache: {

            }
        }
    },
    mutations: {
        setPhotosForCurrentAlbum(state,  {photos, albumId}) {
            state.all = photos;
            state.cache[albumId] = photos;
        }
    },
    actions: {
        async getByAlbum(context, { albumId }) {
            if (context.state.cache[albumId]) {
                context.commit('setPhotosForCurrentAlbum', {photos: context.state.cache[albumId], albumId });
            }
            
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?album=${albumId}`);

            const json = await response.json();
            
            context.commit('setPhotosForCurrentAlbum', {photos: json, albumId });
        }
    }
}