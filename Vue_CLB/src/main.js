import { createApp } from 'vue'
import App from './App.vue'


// Importamos los componentes para utilizarlos en las rutas.
import Home from './components/Home.vue'

import Ofimatica from './components/Ofimatica.vue'
import Programacion from './components/Programacion.vue'
import Sos from './components/Sos.vue'
import Registro from './components/registro.vue'
import Login from './components/login.vue'
import Administracion from './components/Administracion.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js';

import './assets/main.css'


let estaAutenticado = false;

// Definimos las rutas.
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/ofimatica',
        component: Ofimatica
    },
    {
        path: '/programacion',
        component: Programacion
    },
    {
        path: '/sos',
        component: Sos
    },
    {
        path: '/registro',
        component: Registro
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/administracion',
        component: Administracion,
        beforeEnter: (to, from) => {
            if(estaAutenticado){
                return true;
            }else{
                return false;
            }
        },
    },
]


// Creamos una instancia router.
const router = createRouter({
    history: createWebHistory(),
    routes,
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        estaAutenticado = true;
        router.push("/");
    } else {
        estaAutenticado = false;
        router.push("/");
    }
});


// Creamos y montamos la instancia.
const app = createApp(App)
app.use(router)
app.mount('#app')
