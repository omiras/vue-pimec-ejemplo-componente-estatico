<!-- tag script setup donde iria todo nuestro JAvaScript -->
<script setup>
// import es una palabra reservada que sirve para "importar" un recurso y asignarlo a una variable. En este caso ,importamos el fichero Animal.vue y lo ponemos en la variable Animal 
import Animal from "./components/Animal.vue"
import Counter from "./components/Counter.vue"

</script>

<!-- tag template donde va todo nuestro HTML -->
<template>
  <header class="header">
    <p>Hola soy un menú de navegación, creeme </p>
  </header>
  <main>
    <h1>Protectora de animales</h1>
    <p>Bienvenido a Progats, tu protectora de proximidad</p>
    <section class="animal-list">
      <Animal />
      <Animal />
      <Animal />
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
}

.header {
  border: 2px solid purple;
}
</style>
