import {Routes, RouterModule} from '@angular/router';

import {CAComponent} from './CAPortal/ca.component';
import {RegisterComponent} from './Register/register';
import {InaugrationComponent} from './Inaugration/inaugration.component';
import {HomeComponent} from './Home/home.component';
import {RedirectComponent} from './Redirect/redirect.component';
import {WorkshopComponent} from './Workshop/workshop.component';
import {LectureComponent} from './Lectures/lecture.component';
import {ContactUsComponent} from './ContactUs/contactus.component';
import {HospitalityComponent} from './Hospitality/hospitality.component';
import {EventComponent} from './Events/event.component';
import {UpdateSoonComponent} from './UpdateSoon/updatesoon.component';
import {SignUpComponent} from './SignUp/signup.component';
import {LoginComponent} from './Login/login.component';
import {RegistrationComponent} from './Registration/registration.component';
import {MapComponent} from './Map/map.component';
import {SponsComponent} from './Spons/spons.component';
import {MEAComponent} from './Mea/mea.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'ca', component: UpdateSoonComponent},
    {path:'inaugration',component: UpdateSoonComponent},
    {path:'tech2farm',component: UpdateSoonComponent},
    {path:'workshops',component: WorkshopComponent},
    {path:'lectures',component: LectureComponent},
    {path:'hospitality',component: HospitalityComponent},
    {path:'sponsors',component: SponsComponent},
    {path:'contactus',component: ContactUsComponent},
    {path:'events',component: EventComponent},
    {path:'schedule',component: UpdateSoonComponent},
    {path:'signup',component: SignUpComponent},
    {path:'login',component: LoginComponent},
    {path:'registrations',component: RegistrationComponent},
    {path:'maps',component: MapComponent},
    {path:'mea',component: MEAComponent},
    {path:'**', component: HomeComponent}
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);