import Vuex from 'vuex';
import Vue from 'vue';
import todoModule from './modules/todoModule';
import personModule from './modules/personModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {todoModule, personModule}
});
