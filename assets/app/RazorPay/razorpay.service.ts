import {Injectable} from '@angular/core';

declare var Razorpay;

@Injectable()

export class RazorPayService{

options = {
    "key": "rzp_test_nsDMUIgFGsTJkP",
    "amount": "100", // 100 paise = INR 1
    "name": "Mechanica",
    "description": "Mechanica Test Portal",
    "image": "/images/logo.png",
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Shiv Tavker",
        "email": ""
    },
    "notes": {
        "address": "Hello World"
    },
    "theme": {
        "color": "#F37254"
    }
};

rzp1 = new Razorpay(this.options);

    initPay(){
        this.rzp1.open();
    }

}