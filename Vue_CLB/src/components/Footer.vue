<script>

    export default {
        name: 'Footer'
    }

</script>

<template>
    <div class="container">
        <div class="footer-links">
            <a href="#">Carlos López</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Contacto de la empresa</a>
        </div>
        <p>Derechos de autor © 2023, Carlos Lopez. Todos los derechos reservados.</p>
    </div>
</template>

<style scoped>

    v-footer{
        position: relative;
        bottom: 0;
        left: 0;
        color: #fff;
        padding: 20px;
    }

    .container{
        text-align: center;
        max-width: 60%;
        margin: auto;
    }

    .footer-links{
        display: flex;
        justify-content: space-between;
    }

</style>