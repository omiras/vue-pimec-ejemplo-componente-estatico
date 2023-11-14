<script setup>
/** Es un array de strings con los atributos arbitrarios que hemos definido en <Animal /> 
 * Vamos a tener a nuestra disposición una variable para usar en el JS o el template
 */
const props = defineProps(['name', 'image', 'alt', 'birthDate', 'vaccines', 'weight'])

// peso ideal
const idealWeight = 5;

const clicCat = () => {
    console.log(`My name is ${props.name}`)
}

</script>

<template>
    <article @click="clicCat">
        <h2>{{ name }}</h2>
        <h3>Peso {{ weight }} kg </h3>
        <h3>Fecha nacimiento {{ birthDate }}</h3>
        <h3>La diferencia de peso entre el animal y el peso ideal es {{ Math.abs(weight - idealWeight) }}. Esto podria ser
            una computed property, pues es una información que se puede calcular en función de otras variables </h3>
        <img :src="image" :alt="name">
        <section>
            <p v-if="vaccines.length == 0">¡El gato no tiene vacunas! Está en peligro...</p>
            <p v-else>
            <ul>
                <li v-for="v in vaccines">La vacuna {{ v.name }} fue administrada en la fecha {{ v.date }}</li>
            </ul>

            </p>
        </section>
    </article>
</template>

<style>
img {
    width: 200px;
}
</style>