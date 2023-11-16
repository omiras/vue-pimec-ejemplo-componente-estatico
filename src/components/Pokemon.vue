<script setup>

defineProps(['name', 'url'])

</script>

<template>
    <div class="container">
        <h2> Nombre: {{ name }}</h2>
        <p><a :href="url"> Enlace</a> al pokemon en la API </p>
    </div>
</template>

<style scoped>
.container {
    width: 200px;
    border: 1px solid black;
    padding: 1rem;
}
</style>