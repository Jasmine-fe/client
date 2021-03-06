import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { webServerURL, saltRounds } from '../common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        public router: Router,) { }

    loginUrl=`${webServerURL}`;

    login(payload) {
        console.log("payload", payload)
        return this.http.post<any>(`${this.loginUrl}/user/login`, payload, { observe: 'response' })
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/'])
    }

    
}