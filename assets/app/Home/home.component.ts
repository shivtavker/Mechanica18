import {Component, ViewChild} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {RazorPayService} from '../RazorPay/razorpay.service';
import {NotificationService} from '../Navbar/notification.service';
import 'rxjs/Rx';

@Component({
    selector:'home-component',
    templateUrl:'./home.html',
    styleUrls: ['../../../public/stylesheets/home.css']
})

export class HomeComponent{

logo = "#muskified";
quote = "An inspiration to build the future";
quoteArray = ["march 9-11th 2018","Choose to be extraodinary","march 9-11th 2018","Involve in things that change the world","march 9-11th 2018","Not Failing? Not Innovating","march 9-11th 2018","An inspiration to build the future"] //same number image and quote
logoArray = ["#mechanica","#muskified"]
counter:number = 0;
counter1:number = 0;
isLoaded = false;
notifications : Array<any>;
alertShow = false;
counter3:number = 0;
notification = "WorkShops Registrations Opened!!";


    constructor(private http:Http, private razorPayService: RazorPayService, private notificationService : NotificationService){
        this.DesktopView();
        this.notificationService.getNotifications()
                                .subscribe(res => {
                                    this.notifications = res;
                                    console.log(this.notifications);
                                    this.alertShow = true;
                                });
    }

    ngOnInit(){
        this.isLoaded = true;
        setInterval(() => {
            this.logochange();
            this.quotechange();
            this.notificationchange();
        },4000);
    }

    logochange(){
        this.logo = this.logoArray[this.counter];
        this.counter = (this.counter+1)%this.logoArray.length;
    }

    quotechange(){
        this.quote = this.quoteArray[this.counter1];
        this.counter1 = (this.counter1+1)%this.quoteArray.length;
    }
    
    payEvent(){
        this.razorPayService.initPay();
    }

    DesktopView(){
        // console.log(window.innerWidth);
        if(window.innerWidth < 790){
            return false;
        }
        return true;
    }

    notificationchange(){
        this.notification = this.notifications[this.counter3].Notification;
        this.counter3 = (this.counter3+1)%this.notifications.length;
    }
}