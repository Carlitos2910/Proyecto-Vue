<script setup>

    import { ref } from "vue"
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    import { auth } from "../firebase.js";

    let usuario=ref(""), password=ref("")

    function loginUsuario(){

        signInWithEmailAndPassword(auth, usuario.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
        });
    }

    function loginGoogle(){

        signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

</script>


<template>  

    <div class="contact">
        <h1 class="title">Login Usuarios</h1>
        <form action class="form" @submit.prevent="contact">

            <label class="form-label" for="usuario">Usuario: </label>
            <input class="form-input" type="text" name="usuario" id="usuario" v-model="usuario">

            <label class="form-label" for="password">Password: </label>
            <input class="form-input" type="text" name="password" id="password" v-model="password">

            <div class="buttons">
                <button class="form-submit" @click="loginUsuario">Log In</button>
                &nbsp;
                <button class="form-submit" @click="loginGoogle" id="google">
                    <img alt="Gmail" class="logo" src="../assets/google.png" width="30" />
                </button>
            </div>

        </form>
    </div>


</template>


<style scoped>

*{
    box-sizing: border-box;
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

.buttons{
    /* margin: auto; */
    display: flex;
    justify-content: space-between;
}

.buttons button:first-child{
    font-size: large;
    margin-left: 25%;
}

.buttons button:last-child{
    margin-right: 25%;
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