import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationService{

url: string = "https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1efzoarw5ZW5oQziF1oMP3PpJoa0alukd1K-KhIEZg8w&sheet=Toasts"

    constructor(private http: Http){

    }

    getNotifications() : Observable<Array<Object>>{

        let NotificationsArray : [{}];

        return this.http.get(this.url)
                    .map(res => {
                        NotificationsArray = res.json().Toasts;
                        return NotificationsArray;
                    })
    }
}