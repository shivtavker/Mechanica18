import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routerModule} from './app.routes';
import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import {CAComponent} from './CAPortal/ca.component';
import {RegisterComponent} from './Register/register';
import {InaugrationComponent} from './Inaugration/inaugration.component';
import {HomeComponent} from './Home/home.component';
import {RedirectComponent} from './Redirect/redirect.component';
import {WorkshopComponent} from './Workshop/workshop.component';
import {LectureComponent} from './Lectures/lecture.component';
import {NavbarComponent} from './Navbar/navbar.component';
import {ContactUsComponent} from './ContactUs/contactus.component';
import {EventComponent} from './Events/event.component';
import {HospitalityComponent} from './Hospitality/hospitality.component';
import {UpdateSoonComponent} from './UpdateSoon/updatesoon.component';
import {SignUpComponent} from './SignUp/signup.component';
import {LoginComponent} from './Login/login.component';
import {RegistrationComponent} from './Registration/registration.component';
import {MapComponent} from './Map/map.component';
import {SponsComponent} from './Spons/spons.component';
import {MEAComponent} from './Mea/mea.component';

import {EventService} from './Events/event.service';
import {WorkshopService} from './Workshop/workshop.service';
import {LectureService} from './Lectures/lecture.service';
import {NotificationService} from './Navbar/notification.service';
import {ContactUsService} from './ContactUs/contactus.service';
import {RazorPayService} from './RazorPay/razorpay.service';

import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

@NgModule({
    declarations: [
        AppComponent,
        CAComponent,
        RegisterComponent,
        SmoothScrollDirective,
        SmoothScrollToDirective,
        InaugrationComponent,
        HomeComponent,
        RedirectComponent,
        WorkshopComponent,
        LectureComponent,
        HospitalityComponent,
        NavbarComponent,
        ContactUsComponent,
        EventComponent,
        UpdateSoonComponent,
        SignUpComponent,
        LoginComponent,
        RegistrationComponent,
        MapComponent,
        SponsComponent,
        MEAComponent
    ],
    imports: [
        BrowserModule,
        routerModule,
        HttpModule,
        FormsModule,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        HttpModule,
        RazorPayService,
        EventService,
        WorkshopService,
        LectureService,
        NotificationService,
        ContactUsService
    ]
})
export class AppModule {

}