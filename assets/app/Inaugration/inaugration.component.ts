import {Component} from '@angular/core';

@Component({
    selector: 'app-inaugration',
    templateUrl: './inaugration.html',
    styleUrls: ['./inaugration.css']
})

export class InaugrationComponent{

startLaunch= false;

launch(){
    this.startLaunch= true;
}

}