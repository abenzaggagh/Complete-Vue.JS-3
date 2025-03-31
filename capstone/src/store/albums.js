export const albums = {
    namespaced: true,
    state() {
        return {
            all: []
        }
    },
    mutations: {
        setAlbums(state, albums) {
            state.all = albums;
        }
    },
    actions: {
        async fetch(context) {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');

            const json = await response.json();
          
            context.commit('setAlbums', json);
        }
    }
}