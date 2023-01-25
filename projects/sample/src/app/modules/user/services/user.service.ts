import {Injectable} from '@angular/core';
import {UserServicesModule} from './user-services.module';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {FormPatchService, PatchOperation} from 'ng-form-patch';

@Injectable({
    providedIn: UserServicesModule
})
export class UserService implements FormPatchService {

    patchKey: string = 'user';

    public findById(id: string): Observable<User> {
        return of({
            id: id,
            name: 'acme'
        });
    }

    public patch(params: { [key: string]: any; }, opetations: PatchOperation[]): Observable<void> {
        console.log('UserService.patch', params, opetations);
        return of();
    }
}