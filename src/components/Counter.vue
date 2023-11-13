<script setup>
// Importar la función ref para crear variables dinámicas
import { ref } from 'vue'

// inicializamos la variable de estado 'count' que es nuestro contador, a 0
const count = ref(0)

// función para incrementar la variable de estado
const increment = () => {
    count.value++
}

</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>