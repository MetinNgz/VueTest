<template>
    <div>
        <span class="md-title">Vuetable testing</span>
        <vuetable ref="vuetable"
                  :api-mode="false"
                  :data="persons"
                  :fields="['name', 'age', 'gender', 'eyeColor']"
        ></vuetable>
    </div>
</template>

<script>

    import {mapActions, mapGetters} from "vuex";
    import Vuetable from 'vuetable-2';

    export default {
        name: 'Table',
        components: {
            Vuetable
        },
        methods: {
            ...mapActions(['fetchPersons'])
        },

        computed: {
            ...mapGetters(['persons'])
        },
        created() {
            this.fetchPersons();
        }
    }
</script>

<style scoped>
</style>
