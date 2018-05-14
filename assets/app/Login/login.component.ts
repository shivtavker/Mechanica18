import {Component,ViewChild} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector:'login-component',
    templateUrl:'./login.html',
    styleUrls:['../../../public/stylesheets/login.css']
})

export class LoginComponent{

@ViewChild('email')email;
@ViewChild('password')password;

urlPost: string = 'http://www.mechanica.org.in/login';
// urlPost: string = 'http://localhost:8080/login';
// urlPost: string = 'http://5fc2a0c4.ngrok.io/login';

    constructor(private http:Http,public router: Router){

    }

    login(form : NgForm){
        let email = this.email.nativeElement.value;
        let password = this.password.nativeElement.value;
        const body = JSON.stringify({email : email, password: password});
        const headers = new Headers({'Content-Type': 'application/json'});
        // console.log(body);
        this.http.post(this.urlPost, body, {headers: headers})
        // this.http.post('local', body, {headers: headers})
                    // .map(res => res.json())
                    .subscribe(res => {
                        // console.log(res);
                        form.resetForm();
                        localStorage.setItem('token', res.json().token);
                        localStorage.setItem('userID', res.json().userID);
                        localStorage.setItem('MechanicaID', res.json().MechanicaID);
                        localStorage.setItem('Name', res.json().Name);
                        localStorage.setItem('Email', res.json().Email);
                        localStorage.setItem('College', res.json().College);
                        this.router.navigateByUrl('/home');

                    },err => {
                        // console.log(err);
                        if(err.type == 2)
                            alert("Invalid Credentials!!");
                    });
    }

    logout(){
        localStorage.clear();
    }

}