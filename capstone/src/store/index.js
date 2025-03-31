import { createStore } from 'vuex';

import { albums } from './albums';
import { photos } from './photos';

const store = createStore({
    modules: {
        albums,
        photos
    }
});

export default store;