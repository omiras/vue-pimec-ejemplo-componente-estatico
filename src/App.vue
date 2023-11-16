<!-- tag script setup donde iria todo nuestro JAvaScript -->
<script setup>
// import es una palabra reservada que sirve para "importar" un recurso y asignarlo a una variable. En este caso ,importamos el fichero Animal.vue y lo ponemos en la variable Animal 
import Animal from "@/components/Animal.vue" // @ --> carpeta src
import Counter from "@/components/Counter.vue"
import Tile from "@/components/Tile.vue"
import Pokemon from "./components/Pokemon.vue"

// podemos importar cualquier recurso de la carpeta assets y usarlo en nuestro código
import pokemonsJson from '@/assets/pokemons.json'
import logo from '@/assets/logo.svg'
import { ref } from "vue"
import WeddingInvitation from "./components/WeddingInvitation.vue"

console.log("🚀 ~ file: App.vue:9 ~ pokemons:", pokemonsJson)


const pokemons = ref(pokemonsJson.results)
console.log("array de pokemons", pokemons.value);

const vaccinesArray = [{
  name: "Rabia",
  date: "2021-01-01"
}, {
  name: "Moquillo",
  date: "2021-02-15"
}];

const invitations = ["Pepa", "Katerina", "Albertina"]

const peopleInvitedToWedding = ref(invitations.length)

const handleClick = (event) => {
  // La propedad event.currentTarget nos indica el elemento que tenia asociado el manejador de eventos
  console.log("Has hecho click en: ", event.currentTarget)
}

const handlerMouseEnter = (name) => {
  console.log("Has entrado en el Pokemon : " + name)
}

const handleWithPartner = (withPartner, name) => {
  console.log(`${name} viene con acompañante? ${withPartner} `)
  if (withPartner) {
    peopleInvitedToWedding.value++
  } else {
    peopleInvitedToWedding.value--
  }
}

</script>

<!-- tag template donde va todo nuestro HTML -->
<template>
  <h3>Noticia: boda. Hay invitaciones. A cada invitación, le puedes pedir si viene con acompañante o no</h3>
  <p>El número total de asistentes a la boda es <span style="color:brown; font-weight: bold;"> {{ peopleInvitedToWedding
  }}</span></p>
  <WeddingInvitation @with-partner="handleWithPartner" v-for="i in invitations" :name="i" />


  <h3>Uso de eventos customizados que generan los componentes hijos</h3>

  <h3>Uso de v-for para renderizar un conjunto de componentes Pokemon. Gestión de eventos usando el manejador en la misma
    declaración del componente</h3>
  <!-- Es importante usar la directiva v-bind (los dos puntos), para especificar que el atributo es dinámico, y su valor depende de cada campo del objeto -->
  <Pokemon @click="handleClick($event)" @mouseenter="handlerMouseEnter(p.name)" v-for="p in pokemons" :name="p.name"
    :url="p.url" />
  <h3>Uso de v-for para renderizar un conjunto de tags HTML</h3>
  <p v-for="p in pokemons"> {{ p.name }}</p>
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
