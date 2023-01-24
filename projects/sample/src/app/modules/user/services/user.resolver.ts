import {Injectable} from '@angular/core';
import {UserServicesModule} from './user-services.module';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
    providedIn: UserServicesModule
})
export class UserResolver implements Resolve<User> {

    public constructor(private service: UserService) {
    }


    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>{
        return this.service.findById(route.params['id']);
    }
}