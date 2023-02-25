<script setup>

    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'


    const db = useFirestore();
    const Ofimatica = useCollection(collection(db, 'Ofimatica'))
    const Programacion = useCollection(collection(db, 'Programacion'))
    const Sistemas = useCollection(collection(db, 'Sistemas'))

    function borrarCurso(curso, id){
        deleteDoc(doc(db, curso, id))
    }

    defineProps({
        msg: {
        type: String,
        required: true
        }
    })

    function contactForm() {
        if (confirm('Si aceptas se creará el nuevo curso.')) {

            const categoria = document.getElementById('categoria');
            const nombre = document.getElementById('nombre');
            const duracion = document.getElementById('duracion');
            const imagen = document.getElementById('imagen');

            const mainCollection = collection(db, categoria.value);

            const subCollectionData = {
                nombre: nombre.value,
                duracion: duracion.value,
                imagen: imagen.value
            };

            addDoc(mainCollection, {
                curso : subCollectionData 
            })

            .then(function(docRef) {
                console.log("Documento agregado con ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error al agregar documento: ", error);
            });
        } else{
            console.log("No se ha creado el nuevo curso.")
        }
    }


    function confirmarBorrado(curso, id) {
        if (confirm('Si aceptas borrarás el curso.')) {
            borrarCurso(curso, id)
        }
    }

</script>


<template>

    <h1 class="green">Administración</h1>
    <br>
    <hr class="green">
    <br>
    
    <h1 class="green">OFIMATICA</h1>
    <div v-for="curso in Ofimatica" :key="curso.id">
        <div class="curso">
            <h3> Nombre: {{ curso.curso.nombre }} </h3>

            <!-- <a :href="`http://localhost:5173/src/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a> -->
            <a :href="`https://vue-clb.web.app/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a>

            <h3> Duración: {{ curso.curso.duracion }} </h3>
            
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.curso.imagen}`" alt=Curso> -->
            <img :src="`https://vue-clb.web.app/assets/cursos/${curso.curso.imagen}`" alt=Curso>
            
            <!-- <button @click="borrarCurso('Ofimatica', curso.id)"> Borrar </button> -->
            <button @click="confirmarBorrado('Ofimatica', curso.id)"> Borrar </button>
        </div>
    </div>

    <h1 class="green">PROGRAMACION</h1>
    <div v-for="curso in Programacion" :key="curso.id">
        <div class="curso">
            <h3> Nombre: {{ curso.curso.nombre }} </h3>

            <!-- <a :href="`http://localhost:5173/src/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a> -->
            <a :href="`https://vue-clb.web.app/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a>

            <h3> Duración: {{ curso.curso.duracion }} </h3>
            
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.curso.imagen}`" alt=Curso> -->
            <img :src="`https://vue-clb.web.app/assets/cursos/${curso.curso.imagen}`" alt=Curso>

            <!-- <button @click="borrarCurso('Programacion', curso.id)"> Borrar </button> -->
            <button @click="confirmarBorrado('Programacion', curso.id)"> Borrar </button>
        </div>
    </div>

    <h1 class="green">SISTEMAS</h1> 
    <div v-for="curso in Sistemas" :key="curso.id">
        <div class="curso">
            <h3> Nombre: {{ curso.curso.nombre }} </h3>

            <!-- <a :href="`http://localhost:5173/src/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a> -->
            <a :href="`https://vue-clb.web.app/assets/pdfcursos/${curso.curso.nombre}.pdf`" target="_blank">PDF</a>

            <h3> Duración: {{ curso.curso.duracion }} </h3>
            
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.curso.imagen}`" alt=Curso> -->
            <img :src="`https://vue-clb.web.app/assets/cursos/${curso.curso.imagen}`" alt=Curso>
            
            <!-- <button @click="borrarCurso('Sistemas', curso.id)"> Borrar </button> -->
            <button @click="confirmarBorrado('Sistemas', curso.id)"> Borrar </button>
        </div>
    </div>

    <div class="contact">
        <h1 class="title">Crear Cursos</h1>
        <form action class="form" @submit.prevent="contact">
        
            <!-- <label class="form-label" for="#categoria">Categoria</label>
            <input v-model="curso" class="form-input" type="text" id="categoria" required placeholder="Categoria"> -->

            <!-- CURSOS: Ofimatica, Programacion, Sistemas -->
            <label class="form-label" for="#categoria">Categoria</label>
            <select v-model="curso" class="form-input" id="categoria" required>
                <option>Ofimatica</option>
                <option>Programacion</option>
                <option>Sistemas</option>
            </select>


            <label class="form-label" for="#nombre">Nombre</label>
            <input v-model="nombre" class="form-input" type="text" id="nombre" required placeholder="Nombre">

            <label class="form-label" for="#duracion">Duracion</label>
            <input v-model="duracion" class="form-input" type="text" id="duracion" required placeholder="Duracion">
            
            <label class="form-label" for="#imagen">Imagen</label>
            <input v-model="imagen" class="form-input" type="text" id="imagen" required placeholder="Imagen">

            <input class="form-submit" type="submit" value="Enviar Noticia" @click="contactForm">
        </form>
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
    background-color: #cf1919;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.curso button:hover {
    background-color: #ff0000;
}

/* FORMULARIO */
.contact {
    width: 60%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.title {
    text-align: center;
    margin-bottom: 20px;
}

.form {
    display: flex;
    flex-direction: column;
}

.form-label {
    margin-bottom: 5px;
    font-weight: bold;
}

.form-input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-input:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow: 0 0 5px #66afe9;
}

.form-submit {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.form-submit:hover {
    background-color: #3e8e41;
}


</style>