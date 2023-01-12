import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user.model'


@Injectable({
    providedIn: 'root'
})
export class UserService {
    // use userDetail-server
    url_dotnet = "https://192.168.1.3:7294/api/UserDetails";
    // use demo-jpa-spring-boot2-mysql 
    url_java = "http://192.168.1.3:8080/user/list";

    constructor(private http : HttpClient) { }

    getUsers(): Observable<UserModel[]> {
        return  this.http.get<UserModel[]>(this.url_dotnet);
    }

    postUser(userModel: UserModel): Observable<any> {
        const headers = new HttpHeaders( { 'Content-Type': 'application/json'} );

        return this.http.post<UserModel>(
            this.url_dotnet,
            JSON.stringify(userModel),
            {'headers': headers}
        );

    }

}