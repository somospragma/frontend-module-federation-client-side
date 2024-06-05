# Problemas de enrutamiento entre microfrontends y solución

<img
    src="host/src/assets/router-instance-custom-events.png"
    alt="mf instance example"
    style="width: 550px"
    align="right"
  />

Los **Custom Events**, un mecanismo derivado que nos permite crear nuestros propios eventos personalizados y así utilizarlos en
momentos concretos de nuestro código, para disparar funciones asociadas al igual que se hace con los eventos habituales
en Javascript, como click o input. Más en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events).

Analizando la problemática se propone usar Custom Events para comunicar el enrutamiento del host hacia los microfrontends y viceversa. Para ello hacemos
uso de las siguientes utilidades:

```typescript
// Host -> host-notifier.ts
export class RoutingNotifier {
  static notify(hostNotification: HostNotification) {
    document.dispatchEvent(
      new CustomEvent('notifyMf', {
        detail: hostNotification,
      })
    );
  }
}

// Microfrontends -> mf-notifier.ts
export class RoutingNotifier {
  static notify(mfNotification: MfNotification) {
    document.dispatchEvent(
      new CustomEvent('notifyHost', {
        detail: mfNotification,
      })
    );
  }
}
```

## Comunicación host hacia microfrontends

En el host comenzamos definiendo una suscripción a los eventos del router para comunicarlos hacia los microfrontends, es importante
incluir el **estado del router** y la **url actual** (la usaremos más adelante).

```typescript
ngOnInit() {
  this.subcription = this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      RoutingNotifier.notifyMf({
        url: event.urlAfterRedirects,
        state: this.location.getState() as RouterState,
      } as RoutingAPI);
    }
  });
}
```

Además de ello en el app.component de cada mf agregamos un listener para recibir los eventos (url y state) emitidos por el host.

```typescript
  @HostListener('document:notifyMf', ['$event'])
  onNotifyMFNavigate({ detail: { url, state } }: CustomEvent<MfNotification>) {
    if (url.includes('authentication')) {
      this.router.navigate([url], { state });
    }
  }
```

> Algo muy importante que la URL contenga el nombre dle micro para que solo realice la navegación en ese caso.

De esta manera podemos navegar desde el host hacia una ruta o subruta de un microfrontend.

## Comunicación microfrontends hacia host

Para este tipo hacemos usos del componente **NotFoundComponent** que se encarga de emitir un evento hacia el host cuando no encuentra una ruta.

```typescript
// mf-authentication  -> app.routes.ts
{
  path: '**',
  component: NotFoundComponent,
}

// mf-authentication -> not-found.component.ts
@Component({
  selector: 'app-not-found',
  template: '',
  standalone: true,
})
export class NotFoundComponent {
  private readonly location = inject(Location);

  constructor() {
    const mfNotification: MfNotification = {
      url: `${location.pathname.substring(1)}${location.search}`,
      state: this.location.getState() as RouterState,
    };

    RoutingNotifier.notify(mfNotification);
  }
}
```

> Hacemos uso de la utilidad **RoutingNotifier** para emitir un evento hacia el host con la URL y el estado del router.

Finalmente en el host agregamos un listener para recibir los eventos emitidos por los microfrontends.

```typescript
@HostListener('document:notifyHost', ['$event'])
onNotifyHostNavigate({ detail: { url, state } }: CustomEvent<HostNotification>) {
  this.router.navigate([url], { state });
}
```

Con estas configuraciones conseguimos una navegación **bidireccional** solucionando el problema de enrutamiento entre microfrontends.