import {Component} from '@angular/core';

@Component({
    selector:'redirect',
    template:'<h2>Redirecting...</h2>'
})

export class RedirectComponent {

    constructor(){

    }

    ngOnInit(){
        window.location.href = 'https://goo.gl/SrXeSv'
    }

}