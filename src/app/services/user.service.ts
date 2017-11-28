import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

@Injectable()
export class UserService {

  userURL="https://jsonplaceholder.typicode.com/users"
  postURL ="https://jsonplaceholder.typicode.com/posts"

  constructor(private http:Http) { }



  getUserbyId(id:number){
    const url = `${this.userURL}?id=${id}`
    //console.log(url);
    return this.http.get(url).map((response:Response)=>
    {  
      return response;
    }
  ).catch(this.handleError);
  }


  getPostbyId(id:number){
    const url = `${this.postURL}?id=${id}`
    return this.http.get(url).map((response:Response)=>
    {  
      return response;
    }
  ).catch(this.handleError);
  }


  
  //FUNCTION FROM ANGULAR.IO 
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    // alert(errMsg);
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}
