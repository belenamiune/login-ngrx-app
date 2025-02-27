# TODO

 ## Rutas

La ruta `path: '**'` es un wildcard y debería redirigir a una página específica "Page Not Found", o en todo caso a una página de Inicio/Landing o al Dashoboard en esta app. Al Login solo se debería redirigir cuando un usuario no autenticado intente entrar a una ruta protegida, o después de un Logout.

Agregaría una ruta base `path:''` que redirija al dashboard.


## Theme

Pasaría la lógica de setear/obtener el theme a un servicio. En ese servicio podés centralizar acceder al `DOM` como al `localStorage`. POdés usar el `@Inject(DOCUMENT) private document: Document` para inyectar el `document` como dependencia y así poder mockearlo en los tests.

Sacar el `localStorage.setItem('theme', theme)` del reducer. Los reducers solo deben recibir el state original y retornar el state actualizado, no debe realizar ningún side effect, tiene que ser 100% functional programming. Agregar el effect donde ya está haciendo el `document.documentElement.setAttribute('data-theme', theme)`. Y ambas cosas, acceder al setear el tema en el `localStorage` y agregar el `data-theme` deberían ser abstraídos al servicio que te mencioanaba antes.


## Navbar

Debería ir en un carpeta tipo "Core/Main/Root/Shell" o en la misma carpeta app (no recomiendo). Shared es para cosas que pueden ser reutilizadas y que no pertenecen a un feature en particular. El navbar se renderiza una sola vez en una solo lugar, no se reutiliza. En las PWA sería parte de la [app shell model](https://developer.chrome.com/docs/workbox/app-shell-model).


## Folder Structure

En este caso es irrelevante por la escala, pero lo mejor siempre es organizar primero por features (users, books, movies) y dentro de cada feature por tipo (pages, components, services, state). En este caso podria ser algo así:

- app
  - shell
    - components
      - navbar
  - theme
    - services
    - store
  - books
    - components
      - dashboard
    - services
    - store
  - auth
    - components
      - login
    - store


## Auth State

El `isAuthenticated` es redundante, la presencia o no del `username` alcanza para determinar si está autenticado o no.

Agregaría validación required a los inputs y un mensaje de error debajo de cada uno cuando ese validator tiré el error.

Debería haber **tres acciones**, correspondientes a los 3 posibles states:

- login: representa la intención de logearse, recibe el email y el password, debería setear un `loading:true`
- loginSuccess: el login fue exitoso, recible el token (dentro del token está el username, email, etc, ver JWT), debería setear un `loading:false`
- loginError: no se pudo autenticar, recibe el error, debería setear un `loading:false` y un `error: '...'`

Debería haber **dos efectos**

- $login > ofType(actions.login): toma el email y password del login, usa un servicio para hacer el request (en este caso lo harcodeaste en el component de login, podrías crear un servicio así lo ponés en el effect). Los efectos siempre retornar otras acciones, en este caso debería retornar o `loginSuccess` o `loginError`. También en este efecto se puede agregar/remover el token del `localStorage`
- $logout: está ok


### Identar el código