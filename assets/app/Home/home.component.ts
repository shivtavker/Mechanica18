import {Component} from '@angular/core';

@Component({
    selector:'home-component',
    templateUrl:'./home.html',
    styleUrls: ['../../../public/stylesheets/home.css']
})

export class HomeComponent{

isLoaded = false;    
    
    ngOnInit(){
        this.isLoaded = true;
    }
}
