import {Component} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Router} from '@angular/router';
import {EventService} from './event.service';

@Component({
    selector:'event-component',
    templateUrl:'./event.html',
    styleUrls:['../../../public/stylesheets/workshop.css']
})

export class EventComponent{

events : Array<Object>;

gear = true;

eventToDisplay = {
    Title: 'Shiv Tavker',
    Description: 'Mech',
    ID: '0001'
};

urlPost: string = 'http://www.mechanica.org.in/register';
// urlPost: string = 'http://localhost:8080/register';
// urlPost: string = 'http://5fc2a0c4.ngrok.io/register';

    constructor(private eventService : EventService, private http:Http, public router : Router){

        this.eventService.getEvents()
                         .subscribe(res => {
                             this.events = res;
                             this.gear = false;
                         })

    }

    showDetails(title, desc, ID){
        this.eventToDisplay.Title = title;
        this.eventToDisplay.Description = desc;
        this.eventToDisplay.ID = ID;
    }

    registerEvent(registerid){
        if(localStorage.getItem('token') !== null){
            const token = '?token=' + localStorage.getItem('token');
            const body = JSON.stringify({registerid : registerid});
            const headers = new Headers({'Content-Type': 'application/json'});
            console.log(body);
            this.http.post(this.urlPost + token, body, {headers: headers})
            // this.http.post('local', body, {headers: headers})
                        // .map(res => res.json())
                        .subscribe(res => {
                            console.log(res);
                            // form.resetForm();
                            alert("You have successfully Registered for the Event!!");
                            this.router.navigateByUrl('/events');
                        },err => {
                            // console.log(err);
                            if(err.type == 2){
                               alert("You have already registered!!");
                                this.router.navigateByUrl('/login');
                            }
                        });
        }
        else if(localStorage.getItem('token') === null){
            this.router.navigateByUrl('/signup');
        }
    }

    
}