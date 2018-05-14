import {Component,OnInit} from '@angular/core';
import {NotificationService} from './notification.service';

declare var $;

@Component({
    selector:'navbar-component',
    templateUrl:'./navbar.html',
    styleUrls: ['../../../public/stylesheets/navbar.css']
})

export class NavbarComponent implements OnInit{

userDetail= false;

user = {
    MechanicaID: "",
    Name: "",
    Email: "",
    College: "",
}

    constructor(private notificationService : NotificationService){
        
    }

    ngOnInit(){
        //------Close Navbar Automatically------//
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
    }

    isLoggedin(){
        this.user.MechanicaID = localStorage.getItem('MechanicaID');
        this.user.Name = localStorage.getItem('Name');
        this.user.Email = localStorage.getItem('Email');
        this.user.College = localStorage.getItem('College');
        
        return localStorage.getItem('token') !== null;
    }

    logout(){
        localStorage.clear();
    }

    isAdmin(){
        return localStorage.getItem('Email') == 'admin@admin.com';
    }

}