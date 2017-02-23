import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoServices{
  constructor(private http: Http){
    console.log('photo services initialized...');
  }
  getPhoto(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(res => res.json());
  }
}
