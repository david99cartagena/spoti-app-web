# 🎧 Spoti-App

Aplicación web desarrollada en **Angular** que consume la **API pública de Spotify** para visualizar artistas, álbumes, canciones y escuchar previews directamente desde el navegador.

Este proyecto se desarrolló como parte del curso **"Angular de Cero a Experto (Edición 2018)"** dictado por Fernando Herrera, con el objetivo de reforzar conceptos clave como:

- Enrutamiento con parámetros dinámicos
- Manejo de servicios HTTP
- Pipes personalizados
- Uso de la API de Spotify
- Observables y programación reactiva

## 📸 Demo

🔗 **Visita la demo en línea:** [Spoti-App en Netlify](https://starlit-valkyrie-da3355.netlify.app)

- **Inicio**  
  ![Spoti-App Screenshot](https://raw.githubusercontent.com/david99cartagena/spoti-app-web/refs/heads/main/media/Screenshot_1.png)

- **Selección de un artista**  
  ![Spoti-App Screenshot](https://raw.githubusercontent.com/david99cartagena/spoti-app-web/refs/heads/main/media/Screenshot_2.png)

- **Búsqueda**  
  ![Spoti-App Screenshot](https://raw.githubusercontent.com/david99cartagena/spoti-app-web/refs/heads/main/media/Screenshot_3.png)

## 🚀 Tecnologías Utilizadas

- **Angular 15**
- **RxJS**
- **TypeScript**
- **Bootstrap 4**
- **Spotify API**
- **HTML5 / CSS3**

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Vista de nuevos lanzamientos
│   │   ├── search/            # Búsqueda de artistas
│   │   ├── artista/           # Detalle del artista y top tracks
│   │   ├── tarjetas/          # Cards reutilizables para mostrar álbumes/artistas
│   │   └── shared/            # Navbar y componente de loading
│   ├── services/
│   │   ├── spotify.service.ts # Conexión con API de Spotify
│   │   └── auth.service.ts    # (si aplica para OAuth en futuras versiones)
│   ├── pipes/
│   │   ├── noimage.pipe.ts    # Pipe para imágenes por defecto
│   │   └── domseguro.pipe.ts  # Sanitiza URLs para embeds de Spotify
│   └── app-routing.module.ts  # Configuración de rutas
```

## 🔑 Funcionalidades

✅ Buscar artistas mediante barra de búsqueda  
✅ Visualizar álbumes más recientes desde la API  
✅ Ver detalles y top tracks de un artista  
✅ Escuchar previews de canciones con HTML5 audio  
✅ Reproductor incrustado usando widgets de Spotify  
✅ Rutas amigables con parámetros (`artist/:id`)  
✅ Indicador de carga para peticiones HTTP

---

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/spoti-app-web.git
```

```bash
cd spoti-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`

<!-- ## 🧠 Conceptos Reforzados

- Uso del **routerLink** y **ActivatedRoute**
- **ngModel** para binding bidireccional en formularios
- Manejo de tokens con la API de Spotify (`client_credentials`)
- Modularización con componentes y servicios
- Creación de **pipes personalizados** (`noimage`, `domseguro`)
- Uso de **Observables** con `async`, `pipe`, y `map`

--- -->

## ⚙️ Configuración de API

Este proyecto usa **autenticación con Client Credentials** de Spotify.

Si quieres usar tu propia app:

1. Regístrate en [Spotify for Developers](https://developer.spotify.com/dashboard/)
2. Crea una nueva aplicación y copia tu `client_id` y `client_secret`
3. Reemplaza los valores en `spotify.service.ts`:

```ts
const clientId = "TU_CLIENT_ID";
const clientSecret = "TU_CLIENT_SECRET";
```

Basado en el curso de **Fernando Herrera** – [Angular: De Cero a Experto (Edición 2018)](https://www.udemy.com/course/angular-de-cero-a-experto/)

<!-- ---

## 📌 Notas Finales

Este proyecto es ideal para aprender cómo trabajar con APIs públicas usando Angular, y reforzar conceptos modernos del framework como servicios, pipes, enrutamiento y observables.

¡Personalízalo o extiéndelo como quieras! Puedes añadir login con OAuth, mostrar álbumes completos o implementar reproducción continua con audio HTML5. -->
