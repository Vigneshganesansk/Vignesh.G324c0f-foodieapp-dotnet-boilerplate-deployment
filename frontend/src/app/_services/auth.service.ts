import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"
import { BehaviorSubject, Observable } from "rxjs";
import { StorageService } from "./storage.service";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService{
    constructor(
        private http: HttpClient,
        private storage: StorageService
        ){
    }
    baseUrl = environment.baseUrl;
    private loginStatus = new BehaviorSubject<boolean>(false);
    loginStatus$ = this.loginStatus.asObservable();
    login(model: any){
        const url = environment.authURL;
       return this.http.post(url,model).pipe(
           map((response: any) => {
               const user = response;
               if(user){
                   sessionStorage.setItem('token',user.token);
                   this.storage.userName = model.Username;
                   this.loginStatus.next(true);
                   
               }else{
                this.loginStatus.next(false);

               }
           })
       )
    }
    register(model: any){
        return this.http.post(environment.registerURL,model);
    }
    logout(){
        sessionStorage.removeItem('token');
        this.loginStatus.next(false);
    }
}