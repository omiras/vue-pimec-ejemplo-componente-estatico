<script setup>

const props = defineProps(['letter', 'color'])

</script>

<template>
    <div :style="{ backgroundColor: color }" class="tile">
        <div>{{ letter }}</div>
    </div>
</template>

<style scoped>
div.tile {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(66, 57, 57, 0.437);
    font-size: 2rem;
    padding: 1rem;
    border-radius: 8px;
    width: 25px;
    height: 25px;
    text-transform: uppercase;
}
</style>