import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'server',
        loadChildren: () => import('./components/server-root/server-root.routes')
    }
];
