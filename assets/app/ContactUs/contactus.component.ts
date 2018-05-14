import {Component} from '@angular/core';
import {ContactUsService} from './contactus.service';

@Component({
    selector:'contactus-component',
    templateUrl:'./contactus.html',
    styleUrls: ['../../../public/stylesheets/contactus.css']
})

export class ContactUsComponent{

gear = true;

members : Array<Object>;

    constructor(private contactUsService : ContactUsService){

        this.contactUsService.getMembers()
                         .subscribe(res => {
                             this.members = res;
                             this.gear = false;
                         })

    }
}