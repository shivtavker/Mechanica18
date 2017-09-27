import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {CAComponent} from './CAPortal/ca.component';
import {RegisterComponent} from './Register/register';
import {InaugrationComponent} from './Inaugration/inaugration.component';
import {HomeComponent} from './Home/home.component';

import {routerModule} from './app.routes';

import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

@NgModule({
    declarations: [
        AppComponent,
        CAComponent,
        RegisterComponent,
        SmoothScrollDirective,
        SmoothScrollToDirective,
        InaugrationComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        routerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}