import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkshopService{

url: string = "https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1efzoarw5ZW5oQziF1oMP3PpJoa0alukd1K-KhIEZg8w&sheet=Workshops"

    constructor(private http: Http){

    }

    getWorkshops() : Observable<Array<Object>>{

        let WorkshopsArray : [{}];

        return this.http.get(this.url)
                    .map(res => {
                        WorkshopsArray = res.json().Workshops;
                        return WorkshopsArray;
                    })
    }
}