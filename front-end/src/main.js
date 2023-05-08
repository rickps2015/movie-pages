import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Importando icones
import { faUserSecret, faMagnifyingGlass, faStar, faChevronRight, faChevronLeft, faHouse, faMoon, faSun, faSpinner} from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'

const app = createApp(App)

//Import de Layouts
import HeaderLayout from "./components/HeaderLayout.vue";

app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.component("header-layout", HeaderLayout)
// Adicionando icones
library.add(faUserSecret, faMagnifyingGlass, faStar, faChevronRight, faChevronLeft, faHouse, faMoon, faSun, faSpinner)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
