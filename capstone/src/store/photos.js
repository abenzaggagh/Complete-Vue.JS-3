export const photos = {
    namespaced: true,
    state() {
        return {
            all: []
        }
    },
    mutations: {
        setPhotosForCurrentAlbum(state, photos) {
            state.all = photos;
        }
    },
    actions: {
        async getByAlbum(context, { albumId }) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?album=${albumId}`);

            const json = await response.json();
            
            console.log(json);
            context.commit('setPhotosForCurrentAlbum', json);
        }
    }
}