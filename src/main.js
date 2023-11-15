// Podemos importar y cargar un archivo CSS en cualquier JavaScript
import './assets/main.css'

// importar la función createApp del módulo 'vue'.
import { createApp } from 'vue'

// importamos un componente y lo metemos en la variable App
import App from './App.vue'

// Crear una aplicación Vue y "colgarla" del nodo con id="app"
createApp(App).mount('#app')
