import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactUsService{

url: string = "https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1efzoarw5ZW5oQziF1oMP3PpJoa0alukd1K-KhIEZg8w&sheet=Team"

    constructor(private http: Http){

    }

    getMembers() : Observable<Array<Object>>{

        let MembersArray : [{}];

        return this.http.get(this.url)
                    .map(res => {
                        MembersArray = res.json().Team;
                        return MembersArray;
                    })
    }

}