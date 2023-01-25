import {Injectable} from '@angular/core';
import {ProjectServicesModule} from './project-services.module';
import {Observable, of} from 'rxjs';
import {Project, ProjectCategory} from '../models/project';
import {FormPatchService, PatchOperation} from 'ng-form-patch';

@Injectable({
    providedIn: ProjectServicesModule
})
export class ProjectService implements FormPatchService {

    public patchKey: string = 'project';

    public findById(id: string): Observable<Project> {
        return of({
            id: id,
            name: 'My project',
            metadata: {
                category: ProjectCategory.WORK,
            },
            modules: [
                {id: id + 'module1', name: 'Module 1', description: 'Description 1'},
                {id: id + 'module2', name: 'Module 2', description: 'Description 2'}
            ]
        })
    }

    public patch(params: { [key: string]: any; }, operations: PatchOperation[]): Observable<void> {
        console.log('ProjectService.patch', params, operations);
        return of();
    }
}