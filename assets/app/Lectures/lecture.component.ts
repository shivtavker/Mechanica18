import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {LectureService} from './lecture.service';

@Component({
    selector:'lecture-component',
    templateUrl:'./lecture.html',
    styleUrls: ['../../../public/stylesheets/workshop.css']
})

export class LectureComponent {

urlPost: string = 'http://www.mechanica.org.in/register';
// urlPost: string = 'http://localhost:8080/register';
// urlPost: string = 'http://5fc2a0c4.ngrok.io/register';

gear = true;

lectureToDisplay = {
    Title: 'Shiv Tavker',
    Description: 'Mech',
    ID: '0001'
};

lectures : Array<Object>;

    constructor(private lectureService : LectureService, private http:Http, public router : Router){
        this.lectureService.getLectures()
                         .subscribe(res => {
                             this.lectures = res;
                             this.gear = false;
                         });
    }

    showDetails(title, desc, ID){
        this.lectureToDisplay.Title = title;
        this.lectureToDisplay.Description = desc;
        this.lectureToDisplay.ID = ID;
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
                            this.router.navigateByUrl('/lectures');
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