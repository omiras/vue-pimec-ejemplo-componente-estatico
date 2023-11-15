<!-- tag script setup donde iria todo nuestro JAvaScript -->
<script setup>
// import es una palabra reservada que sirve para "importar" un recurso y asignarlo a una variable. En este caso ,importamos el fichero Animal.vue y lo ponemos en la variable Animal 
import Animal from "@/components/Animal.vue" // @ --> carpeta src
import Counter from "@/components/Counter.vue"
import Tile from "@/components/Tile.vue"

// podemos importar cualquier recurso de la carpeta assets y usarlo en nuestro código
import pokemonsJson from '@/assets/pokemons.json'
import logo from '@/assets/logo.svg'

console.log("🚀 ~ file: App.vue:9 ~ pokemons:", pokemonsJson)



const vaccinesArray = [{
  name: "Rabia",
  date: "2021-01-01"
}, {
  name: "Moquillo",
  date: "2021-02-15"
}];



</script>

<!-- tag template donde va todo nuestro HTML -->
<template>
  <h3>Casillas de palabradiadia</h3>
  <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
    <Tile letter="A" color="gray" />
    <Tile letter="b" color="green" />
    <Tile letter="i" color="orange" />
  </div>

  <header class="header">
    <p>Hola soy un menú de navegación, creeme </p>
    <img style="width: 100px;" :src="logo" alt="">
  </header>
  <main>
    <h1>Protectora de animales</h1>
    <p>Bienvenido a Progats, tu protectora de proximidad</p>
    <section class="animal-list">
      <Animal name="Bigotes" :weight="3" image="https://cdn2.thecatapi.com/images/6v3.jpg" birth-date="2020-04-04"
        :vaccines="vaccinesArray" />
      <Animal name="Loki" :weight="5" image="https://cdn2.thecatapi.com/images/67t.jpg" birth-date="2019-09-07"
        :vaccines="[]" />

    </section>
    <section>
      <h2>Perros adoptados hasta el momento</h2>
      <Counter />
      <h2>Gatos adoptados hasta el momento</h2>
      <Counter />

    </section>
  </main>
</template>

<!-- tag style donde va todo nuestro CSS -->
<style>
.animal-list {
  display: flex;
  gap: 1rem;
}

.header {
  border: 2px solid purple;
}
</style>
