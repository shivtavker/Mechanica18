import {Component} from '@angular/core';

@Component({
    selector:'page-ca',
    templateUrl: './ca.component.html',
    styleUrls: ['./ca.component.css']
})

export class CAComponent{
    enter(){
        console.log('entered');
    }
    leave(){
        console.log('byebbye');
    }
}