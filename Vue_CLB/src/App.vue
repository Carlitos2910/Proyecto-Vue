<script setup>

import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from './firebase.js';
import { ref } from 'vue'

import Footer from './components/Footer.vue'


let usuario = ref("");

function cerrarSesion(){
    signOut(auth).then(() => {
    usuario.value = "";
    router.push('/inicio');
    }).catch((error) => {
    // An error happened.
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        usuario.value = user.email;
    }
});

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


var Loading = (loadingDelayHidden=0)=>{
  let loading=null;
  const myLoadingDelayHidden=loadingDelayHidden;
  let imgs=[];
  let lenImgs=0;
  let counterImgsLoading=0;
  function incrementCounterImgs(){
    sleep(myLoadingDelayHidden)
    counterImgsLoading+=1;
    if(counterImgsLoading===lenImgs){
      hideLoading()
    }
  }
  function hideLoading(){
    if(loading!==null){
      loading.classList.remove('show');
      setTimeout(function(){
        loading.remove()
      },myLoadingDelayHidden)
    }
  }
  function init(){
    document.addEventListener('DOMContentLoaded',function(){
      loading=document.querySelector('.loading');
      imgs=Array.from(document.images);
      lenImgs=2;
      if(imgs.length===0){
        hideLoading()
      }else{
        imgs.forEach(function(img){
          img.addEventListener('load',incrementCounterImgs,false)
        })
      }
    })
  }
  return{'init':init}
}

Loading(500).init();

</script>

<template>

  <div class="loading show">
      <div class="spin"></div>
  </div>

  <header>
    <nav>
      <router-link to="/">
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" />
      </router-link>
      {{ usuario }}
    </nav>
    
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/ofimatica">OFIMATICA</router-link>
      <router-link to="/programacion">PROGRAMACION</router-link>
      <router-link to="/sos">SISTEMAS</router-link>
      <router-link v-if="usuario != '' " to="/administracion">ADMINISTRACION</router-link>

      <button v-if="usuario != '' " @click="cerrarSesion()">Cerrar Sesión</button>
      <router-link v-if="usuario == '' " to="/registro">REGISTRO</router-link>
      <router-link v-if="usuario == '' " to="/login">LOGIN</router-link>
    </nav>

  </header>

  <Header />

  <main>
    <router-view></router-view>
  </main>

  <Footer />

</template>



<style scoped>

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    font-size: 1.2rem;
  }

  nav a {
    display: block;
    text-decoration: none;
    margin-left: 1rem;
  }

  nav a:hover{
    color: rgb(0, 221, 33);
  }

  nav button {
    margin-left: 10px;
    font-weight: bold;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  nav button:hover {
    background-color: #be2929;
    border: black;
    cursor: pointer;
  }

  .logo {
    width: 100px;
  }

  @media (min-width: 1024px) {
    header {
      /* display: flex; */
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }


  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: 1s all;
    opacity: 0;
  }
  .loading.show {
    opacity: 1;
  }
  .loading .spin {
    border: 3px solid hsla(185, 100%, 62%, 0.2);
    border-top-color: #3cefff;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

</style>
