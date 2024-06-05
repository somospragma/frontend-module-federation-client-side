# Problemas de enrutamiento entre microfrontends y solución

En este caso haremos uso de la librería [**@angular-architects/microapp**](https://www.npmjs.com/package/@angular-architects/microapp?activeTab=readme)
la cual nos proporciona una solución de enrutamiento entre microfrontends.

Entre sus características principales se encuentran:

- Soporte Multi Router en el mismo objeto ventana
- Soporte para Angular 13+
- Influencia de los creadores de acciones RxJS y NgRx
- Deep Linking a través de diferentes Micro Apps

### Instalación y configuración

Para comenzar con la instalación de la librería ejecutamos el siguiente comando:

```bash
npm install @angular-architects/microapp
```

Para configurar la librería en nuestro proyecto, debemos importar el módulo `MicroAppRoutingModule` en el módulo raíz del
host y cada microfrontend para definir un nombre que los identifique.

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MicroAppRoutingModule.forShell({ name: 'shell' }),
    AppRoutingModule,
  ],
})
export class AppModule {}
```

En los microfrontends:

```typescript
// mf-billing.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    MicroAppRoutingModule.forMicroApp({ name: 'bills' }),
  ],
}) AppModule {}

// mf-home.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    MicroAppRoutingModule.forMicroApp({ name: 'home' }),
  ],
}) AppModule {}
```

### Navegación entre microfrontends

Una vez configurado hacemos uso de la directiva routerLink para navegar entre los microfrontends. Si queremos navegar
desde el host hacia un microfrontend, lo hacemos normalmente con la directiva routerLink:

```html
<p-button routerLink="/home/page-f"> Go to Home - Page - F </p-button>
<p-button routerLink="/bills/page-i"> Go to Bills </p-button>
```

Ahora, si queremos navegar desde un **microfrontend hacia otro**, o desde un **microfrontend hacia el host**, debemos usar la
siguiente **sintaxis** por medio de la directiva routerLink:

```html
<!-- Navigate from mf-bill to page-e in mf-home -->
<a [routerLink]="[{ outlets: { shell: ['home', 'page-e'] } }]"
  >Home - Go to Page E</a
>

<!-- Navigate from mf-home to page-b in host -->
<a [routerLink]="[{ outlets: { shell: ['page-b'] } }]">Host - Go to Page B</a>
```

**También podemos hacer esta navegación por medio de la función navigate de la clase Router:**

```typescript
constructor(private router: Router) {}

goToHostPageA() {
  this.router.navigate([{ outlets: { shell: ['page-a'] } }]);
}
```

Quizá sea una sintaxis un poco confusa, pero es la manera en la que la librería **@angular-architects/microapp** nos
permite realizar esta navegación, además de ello debemos considerar que la URL del navegador tomara esa sintaxis:

- Navegando a una subruta del home: `http://localhost:4200/(shell:home/(home:page-e))`
- Navegando a una subruta de bills: `://localhost:4200/(shell:bills/page-i)`
- Al navegar desde una subruta de un mf a otra subruta de otro mf, la URL se verá de la siguiente manera:
  `http://localhost:4200/(shell:home/page-e//bills://home:)`

### Implicaciones de este enfoque

- No es posible compartir data por medio del estado del router entre microfrontends.
- Sintaxis y legibilidad de la URL en el navegador.
- En algunos casos se pueden presentar comportamientos extraños o errores al navegar entre microfrontends.
- Próximamente se estarán realizando contribuciones a la librería para mejorar la experiencia de uso e incorporar nuevas
  features.

```

```
