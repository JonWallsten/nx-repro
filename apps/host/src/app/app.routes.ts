import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule('remote', './Module').then((m) => {
        return m.RemoteEntryModule;
      }),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
