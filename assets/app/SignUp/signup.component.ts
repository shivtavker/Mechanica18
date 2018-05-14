import {Component,ViewChild} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector:'signup-component',
    templateUrl:'./signup.html',
    styleUrls:['../../../public/stylesheets/signup.css']
})

export class SignUpComponent{

@ViewChild('name')name;
@ViewChild('email')email;
@ViewChild('password')password;
@ViewChild('rollno')rollno;
@ViewChild('college')college;
@ViewChild('confirmpass')confirmpass;
@ViewChild('noAccomodation')noAccomodation;
@ViewChild('yesAccomodation')yesAccomodation;
@ViewChild('yesAttendMechanica')yesAttendMechanica;
@ViewChild('maybeAttendMechanica')maybeAttendMechanica;
@ViewChild('noAttendMechanica')noAttendMechanica;
@ViewChild('publicity')publicity;

showAccomodation = true;

urlPost: string = 'http://www.mechanica.org.in/';
// urlPost: string = 'http://localhost:8080/';
// urlPost: string = 'http://5fc2a0c4.ngrok.io/';

    constructor(private http:Http, public router: Router){
    
    }

    subscribe(form : NgForm){
        let mechanicaid = this.IDgenerator();
        let email = this.email.nativeElement.value;
        let name = this.name.nativeElement.value;
        let password = this.password.nativeElement.value;
        let confirmpass = this.confirmpass.nativeElement.value;
        let publicity = this.publicity.nativeElement.value;
        this.IDgenerator();

        if(password!=confirmpass){
            return alert("Passwords do not match!!");
        }

        let rollno = this.rollno.nativeElement.value;
        let college = this.college.nativeElement.value;

        if(email == "" || name == "" || password == "" || rollno == "" || college == ""){
            return alert("Fields cannot be empty");
        }

        let accomodation = false;
        if(this.yesAccomodation.nativeElement.checked){
            accomodation = true;
        }

        let attendingmechanica = 'yes';
        if(this.noAttendMechanica.nativeElement.checked){
            attendingmechanica = 'no';
        }
        else if(this.maybeAttendMechanica.nativeElement.checked){
            attendingmechanica = 'maybe';
        }

        const body = JSON.stringify({mechanicaid : mechanicaid,email : email, name: name, password: password, rollno: rollno, college: college, attendingmechanica : attendingmechanica, accomodation: accomodation, publicity: publicity});
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log(body);
        this.http.post(this.urlPost, body, {headers: headers})
        // this.http.post('local', body, {headers: headers})
                    // .map(res => res.json())
                    .subscribe(res => {
                        // console.log(res);
                        form.resetForm();
                        alert("You have successfully registered!!");
                        this.router.navigateByUrl('/login');
                    },err => {
                        // console.log(err);
                        if(err.type == 2){
                            alert("You have already registered!!");
                            this.router.navigateByUrl('/login');
                        }
                    });
    }

    IDgenerator(){
        let seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        // console.log('MEA18A' + seq);
        let mechanicaid = 'MEA18B' + seq;
        
        return mechanicaid;
    }

}