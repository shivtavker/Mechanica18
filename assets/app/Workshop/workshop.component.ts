import {Component} from '@angular/core';
import {WorkshopService} from './workshop.service';

@Component({
    selector:'workshop-component',
    templateUrl:'./workshop.html',
    styleUrls: ['../../../public/stylesheets/workshop.css']
})

export class WorkshopComponent {

gear = true;

workshopToDisplay = {
    Title: 'Shiv Tavker',
    Description: 'Mech',
    ID: '0001'
};

workshops : Array<Object>;

    constructor(private workshopService : WorkshopService){
        this.workshopService.getWorkshops()
                         .subscribe(res => {
                             this.workshops = res;
                             this.gear = false;
                         });
    }

    showDetails(title, desc, ID){
        this.workshopToDisplay.Title = title;
        this.workshopToDisplay.Description = desc;
        this.workshopToDisplay.ID = ID;
    }

}