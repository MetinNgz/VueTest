const state = {
    persons: []
};

const getters = {
    persons: (state) => state.persons,
};


const mutations = {
    setPersons: (state, persons) => state.persons = persons,
};

const actions = {
    fetchPersons: async (ctx) => {
        const response = await fetch('https://my-json-server.typicode.com/MetinNgz/FAKE-DATA/persons');
        let persons = await response.json();
        ctx.commit('setPersons', persons);
    },
};

export default {state, getters, actions, mutations};
