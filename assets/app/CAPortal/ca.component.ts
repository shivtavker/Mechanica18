import {Component} from '@angular/core';

@Component({
    selector:'page-ca',
    templateUrl: './ca.component.html',
    styleUrls: ['../../../public/stylesheets/ca.component.css']
})

export class CAComponent{
isLoaded = false;

    ngOnInit(){
        this.isLoaded = true;
    }

    enter(){
        console.log('entered');
    }
    leave(){
        console.log('byebbye');
    }
}
