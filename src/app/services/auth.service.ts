import { Injectable } from '@angular/core';
import { Auth }from '../auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

listofAuth:Auth[]=[];


public findAuth(): Auth[]{
//creating array of type Auth
let auth1=new Auth('manish','test',new Date(),'passed');
let auth2=new Auth('shivam','test12',new Date(),'failed');
let auth3=new Auth('damber','test12',new Date(),'failed');
this.listofAuth.push(auth1);
this.listofAuth.push(auth2);
this.listofAuth.push(auth3);
  //in reality we will make rest api call here
  return this.listofAuth;
  
  }
  


public deleteAuth(auth:Auth){

return this.listofAuth = this.listofAuth.filter(t=>t.uname !=auth.uname)

}

}
