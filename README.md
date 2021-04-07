# FIRST HERE V02 (React Native)
# PROYECTO DE TESIS (UNIVERSIDAD NACIONAL DE PIURA)

![react-native-img](https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg)

**Descripcion**:

El siguiente sistema movil a sido desarrollado con fines educativos para titulación y pensado para fines comerciales en el futuro. El proyecto a sido iniciado con el Inicio rapido de [React Native Cli](https://reactnative.dev/docs/environment-setup). Para crear la estructura basica de un proyecto con ayuda del CLI de React native, se debe digitar "npx react-native init NombreProyecto".

**Exepciones**:

Si el proyecto no inicia, ejecutar en la terminal "npm start -- --reset-cache", esta sencilla linea de comando eliminara el caché del proyecto de React Native, evitando que ocurran confictos ocasionados por datos antiguos, luego de ejecutar esta instruccion cerrar el proyecto con el emulador y luego volver a iniciarlo con "npx react-native run-android"

## ESTRUCTURA DE LOS FOLDER

### Base folder: ./:

*   **/resources**:
    Se encuentran recursos del proyecto, vistas (Componentes), y archivos de lenguaje necesarios. 

    *   **/assets**: Contiene (img, mp3, mp4, gif, etc), todos los recursos necesarios de los que hace uso el proyecto.
    *   **/components**: Contiene todos los componentes de los que esta compuesto el proyecto, estos componentes estan separados por carpetas de acuerdo al encabezado principal al que pertenece
    *   **/lang**: Contiene archivos de configuracion necesarios para hacer cambios que eviten hacer grandes modificaciones en otros archivos y posteriormente base para ser tomado como plantilla para otras implementaciones 

*   **/routes**:
    Contiene archivos que ruteo que renderizan uno u otro componente segun sea el caso. Este sistema usa [react-router-native](https://reactrouter.com/native/guides/quick-start) para llevar a cabo todo este proceso.

*   **/services**:
    Se encuentran todos los archivos de configuracion hacerca de los servicios que hace uso este sistema movil.
    (firebase, googlemaps, etc).


## DEPENDENCIAS USADAS

[@mdi/font](https://materialdesignicons.com/): Iconos de material design

[babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver):  Simplifica las rutas de requerimiento / importación de archivos

[firebase](http://firebase.google.com/): backend as a services

[react-native-paper](https://callstack.github.io/react-native-paper/getting-started.html): Styles basados en Material-UI   

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons): Iconos vectoriales

[react-router-native](https://reactrouter.com/native/guides/quick-start): Ruteo para renderizar uno u otro componente 

[react-native-datepicker](https://www.npmjs.com/package/react-native-date-picker): input de tipo fecha y hora

#### DEPENDENCIAS DE TESTING

Estas dependencias son las usadas para realizar las pruebas unitarias de los componentes funcionales mas importantes, dichas pruebas son necesarias para evitar bugs, hay que tener en cuenta que por el echo de usar pruebas unitarias la aplicacion no pueda presentar problemas en el futuro, por eso se recomienda ir haciendo pruebas a medida que la aplicacion valla creciendo.

[@testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/): Documentacion de la libreria usada, aqui se encuentran todas las funciones de testeo de las que se puede hacer uso.

[jest](https://jestjs.io/docs/configuration): Herramienta de testeo recomendada por React Native, se instala por defecto al crear un proyecto haciendo uso del CLI de React Native

## LICENCIA

Este software esta desarrollado bajo la licencia [Licence](https://github.com/darkus1999/First_Here_02/blob/main/LICENSE).

## AUTHOR

![me](https://avatars.githubusercontent.com/u/55063875?v=4)

[Darkustep](https://github.com/darkus1999)
