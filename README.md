## Descripción  ![Status badge](https://img.shields.io/badge/status-Finished-green)

Este proyecto utiliza React y Next.js 13 para crear una aplicación web que muestra información sobre países. La aplicación consta de dos componentes principales: `Home` y `Country`.

El componente `Home` es el componente principal de la aplicación. Permite al usuario buscar países por nombre y filtrarlos por región. Los países se obtienen de una API utilizando las funciones `getAllCountriesAPI` y `getCountriesByRegionAPI`. La lista de países filtrados se actualiza en tiempo real a medida que el usuario escribe en el campo de búsqueda o selecciona una región. Los países se representan mediante tarjetas individuales utilizando el componente `CountryCard`.

El componente `Country` muestra información detallada sobre un país específico. La información se obtiene de la API utilizando la función `getCountryByNameAPI`. Se muestra la bandera del país, su nombre, detalles como nombre nativo, población, región, subregión, capital, dominio de nivel superior, monedas, idiomas y países fronterizos.

Se utilizó el módulo CSS para estilizar los componentes y se empleó Next Font para las fuentes. Además, se utilizó Next Image para optimizar la carga de imágenes.

[DEMO](https://bia-technical-test.vercel.app/)

![countriesAPP](https://github.com/stivenjimenez/bia-technical-test/assets/58489695/ea2ca3e7-458b-41f5-9dc5-f168e16fc286)



## Requerimientos cumplidos ✅

- El buscador y los filtros son funcionales.
- Se implementó responsive design para que la aplicación sea compatible con diferentes tamaños de pantalla.
- Al hacer clic en una bandera, se abre una nueva vista con la información detallada del país, tal como se muestra en el diseño.


## Instalación

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```
npm install
```

4. Después de la instalación, puedes ejecutar el siguiente comando para iniciar la aplicación:

```
npm run dev
```


5. La aplicación estará disponible en tu navegador en `http://localhost:3000`.

¡Disfruta explorando los países con esta aplicación! 🌍🚀

