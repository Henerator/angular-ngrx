import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonplaceholderUser } from '@models/regres-user-response.model';
import { User } from '@models/user.model';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class UserDataService {
    constructor(
        private http: HttpClient
    ) { }

    private getPath(id: number): string {
        return `https://jsonplaceholder.typicode.com/users/${id}`;
    }

    fetch(id: number): Observable<User> {
        return this.http
            .get<JsonplaceholderUser>(this.getPath(id))
            .pipe(
                delay(1000),
                map(response => ({
                    id: response.id,
                    name: response.name,
                    email: response.email,
                    website: response.website,
                }))
            );
    }
}
