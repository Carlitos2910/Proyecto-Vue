<script setup>

    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'


    const db = useFirestore();
    const Sistemas = useCollection(collection(db, 'Sistemas'));

</script>


<template>
    
    <h1 class="green">SISTEMAS</h1>
    <div v-for="curso in Sistemas">
        <div class="curso">
            <h3> {{ curso.curso.nombre }} </h3>

            <!-- <a :href="`http://localhost:5173/src/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a> -->
            <a :href="`https://vue-clb.web.app/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a>

            <h3> Duración: {{ curso.curso.duracion }} </h3>
            
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.curso.imagen}`" alt=Curso> -->
            <img :src="`https://vue-clb.web.app/assets/cursos/${curso.curso.imagen}`" alt=Curso>
            
            <button> Inscribirse </button>
        </div>
    </div>

</template>

<style scoped>

h1{
    text-align: center;
}

.curso {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.curso img {
    width: 100px;
    margin-left: 1rem;
}

.curso button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.curso button:hover {
    background-color: #3e8e41;
}
</style>