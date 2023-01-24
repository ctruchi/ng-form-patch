import {Injectable} from '@angular/core';
import {ProjectServicesModule} from './project-services.module';
import {Observable, of} from 'rxjs';
import {Project, ProjectCategory} from '../models/project';

@Injectable({
    providedIn: ProjectServicesModule
})
export class ProjectService {

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
}