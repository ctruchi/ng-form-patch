import {Injectable} from '@angular/core';
import {UserServicesModule} from './user-services.module';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';

@Injectable({
    providedIn: UserServicesModule
})
export class UserService {

    public findById(id: string): Observable<User> {
        return of({
            id: id,
            name: 'acme'
        });
    }
}