# falabella-web
## Falabella web calculo de créditos responsive basado en React y Redux

## Instalación

### Docker (Opción 1)

### Requisitos:

- Docker instalado

### Instrucciones de uso:

1. Descargar repositorio. <br/>
2. Verificar la URL de la API,  la variable de entorno URL_BASE en el archivo Dockerfile. <br/>
3. Verficar que el puerto 8080 se encuentre disponible.
4. Ingresar a la carpeta desde el terminal y ejecutar "make web-ini". Docker instalará todos los módulos necesarios y quedará arriba ejecutandose.<br/>


### NodeJS (Opción 2)

### Requisitos:

- Node versión 14.6.0

### Instrucciones de uso:

1. Descargar repositorio y engresar al repositorio a través del terminal. <br/>
2. Verificar que el puerto 4000 se encuentre disponible. <br/>
3. Ejecutar "npm install". Node instalará todos los componentes necesarios.<br/>
4. Ejecutar "node index.js" Node levantará el servicio y quedará ejecutandose.<br/>

*Consierar que para el presente ejemplo, se estableció un token estático para las consultas* <br/>

### Vistas web:

<img src="/others/1.png" /><br/>
<img src="/others/2.png" width="500px"/><br/>


### Mas Opciones de Make:
- api-up: Levantar imágen Docker.
- api-ini: Instalar imagen y subir.
- api-reset: Reiniciar imagen.
- api-down: Bajar imágen
- api-install: Instalar imágen.