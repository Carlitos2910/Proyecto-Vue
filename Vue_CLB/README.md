# Vue_CLB

This is a project of vue.js, for a subject (Web Development in Client Environment) in the professional training called Web Application Development.

## Project Creation

```sh
npm init vue@latest
```

## Project Setup

```sh
npm install
npm install -g firebase-tools
npm install vue-router@4
npm install vuefire firebase
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Observations

- En este proyecto podemos ver en la cabecera varias entradas como Inicio, Ofimatica, Programacion, Sistemas, Administración (con usuario autenticado), botones de Inicio de Sesión y Registro (Visibles si no está autenticado nadie), y el boton de cerrar sesión (visible con usuario autenticado).
  En el main se añadirán todos los componentes de vue según seleccionemos cada uno.
  En el footer podremos ver el autor, politica de privacidad, contacto...
  Al entrar a la página por primera vez o recargarla tendremos un preload mientras se obtienen los datos.
  Se podrá iniciar sesión registrandose con una cuenta normal con contraseña propia, o bien, utilizando la autenticación con google.
  Al iniciar sesión a parte de las categorías nuevas que aparecerán podremos ver nuestro usuario en la parte izquierda de la cabecera.
  Tanto los botones de inicio de sesion como cerrar sesión nos mandarán a la página inicial una vez utilizados.
  En la pantalla inicial veremos una bienvenida con una imagen y descripción de la empresa.
  En cada categoría podremos ver un listado de cursos con su nombre, duracion, imagen y un botón de inscripción.
  En cada curso habrá un link a un PDF con los datos más detallados sobre este.
  Los cursos de cada categoría se obtendrán a traves de la base de datos firebase store, en la que también se podrán añadir mas cursos a través del formulario en la parte de Administración.
  En Administración tendremos un listado de todos los cursos con un botón de borrar en cada uno para eliminarlo de la base de datos y que no salga nada sobre este.
