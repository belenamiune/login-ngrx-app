# TODO


## Theme

El `data-theme` debe ir sobre l `html`, no sobre el `document`.

```typescript
constructor(@Inject(DOCUMENT) private document: Document) {
  this.html = this.document.querySelector('html');
}

setTheme(theme: string) {
  this.html.dataset['data-theme'] = theme;
  // ...
}
```


## Folder Structure

Hay dos carpetas auth, una `app/auth` y otra `app/features/auth`, consolidaría ambas en `app/auth`.


## Auth State

Debería haber dos efectos

- $login > ofType(actions.login): debería retornar o `loginSuccess` o `loginError`.
- $logout: está ok


## Login

Si me logeo exitosamente, cierro la página, y vuelvo, me lleva al login aunque ya esté autenticado. El `AuthGuard` está chequeando el token en el `authState`, que cada vez que carga la app vuelve al `initialState` donde el token es `null`. Una opción es que cuando carga el component `AppComponent`, cheques si existe el token en el `localStorage`, y si existe, despachar la acción `loginSuccess` y que siga el flow (similar a lo que hiciste con el `theme`). Como extra, podés sumar setear/eliminar el token del storage al `AuthService`.