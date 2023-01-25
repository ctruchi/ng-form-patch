import {Injectable} from '@angular/core';
import {ProjectServicesModule} from './project-services.module';
import {FormPatchService, PatchOperation} from 'ng-form-patch';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: ProjectServicesModule
})
export class ProjectModuleService implements FormPatchService {

    patchKey: string = 'module';

    public patch(params: { [key: string]: any; }, opeations: PatchOperation[]): Observable<void> {
        console.log('ProjectModuleService.patch', params, opeations);

        return of();
    }
}