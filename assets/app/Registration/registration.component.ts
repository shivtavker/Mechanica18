import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
    selector: 'registration-component',
    templateUrl: './registration.html',
    styleUrls: ['../../../public/stylesheets/registration.css']
})

export class RegistrationComponent{
    
// urlPost: string = 'http://localhost:8080/registereduser';
urlPost: string = 'http://www.mechanica.org.in/registereduser';
// urlPost: string = 'http://5fc2a0c4.ngrok.io/registereduser';

gear = true;
users : Array<Object>;
usersDate : Array<Date>;
eventToDisplay : number = 1201;
eventNames : Array<String> = ['RoboSoccer', 'Manual Robotics', 'Fire and Ice', 'Desmod', 'Jugaad DA!', 'Industry Defined Problem', 'Paper Presentation', 'Case Study', 'Triathlon', 'Online Quiz', 'Math Quiz', 'Open Quiz', 'Fluid Rush', 'Puzzle Champ', 'Mech Mania', 'Ultimate Hands On', 'Project X', 'Daily Events']

    constructor(private http : Http, public router : Router){
        const token = '?token=' + localStorage.getItem('token');
        http.get(this.urlPost + token)
                .map(res => res.json())
                .subscribe(res =>{
                    this.gear = false;
                    this.users = res.users;
                    console.log(this.users);
                    // this.users.forEach((user, index) => {
                    //     let timeStamp = user._id.toString().substring(0,8);
                    //     let date = new Date(parseInt( timeStamp, 16 ) * 1000);
                    //     this.usersDate[index] = date;
                    // });
                    // console.log(this.usersDate);
                    let date  = new Date( parseInt( "5a84a1c5", 16 ) * 1000 );
                    console.log(date);
                },err => {
                    // console.log(err);
                    if(err.type == 2){
                        alert("You are not Admin!!");
                        this.router.navigateByUrl('/login');
                    }
                });
    }

    showEvent(eventID){
        this.eventToDisplay = eventID;
    }

    userRegistered(RegisteredIDs : Array<number>, ID) {
        if(RegisteredIDs.indexOf(this.eventToDisplay) == -1){
            return false;
        }
        return true;
    }

    getTimeStamp(user){
        let timeStamp = user._id.toString().substring(0,8);
        return new Date(parseInt( timeStamp, 16 ) * 1000);
    }
}