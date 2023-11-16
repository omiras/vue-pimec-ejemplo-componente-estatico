<script setup>
import { ref } from 'vue';


defineProps(['name'])
defineEmits(['with-partner'])

const withPartner = ref(false)



</script>

<template>
    <div class="container">
        <h2> Invitado : {{ name }}</h2>
        <label for="partner">¿Vendrás con acomapañante?</label>
        <input @change="$emit('withPartner', withPartner, name)" v-model="withPartner" type="checkbox" id="partner">
    </div>
</template>

<style scoped>
.container {
    width: 200px;
    border: 1px solid black;
    padding: 1rem;
}
</style>