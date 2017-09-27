import {Routes, RouterModule} from '@angular/router';

import {CAComponent} from './CAPortal/ca.component';
import {RegisterComponent} from './Register/register';
import {InaugrationComponent} from './Inaugration/inaugration.component';
import {HomeComponent} from './Home/home.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'ca', component: CAComponent},
    {path:'inaugration',component: InaugrationComponent}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);