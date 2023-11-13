import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieAuthService {

  constructor() { }

  login(username: string, password: string){
    if(username === "admin" && password === "pword"){
      return 200;
    }else{
      return 403;
    }
  }

}
