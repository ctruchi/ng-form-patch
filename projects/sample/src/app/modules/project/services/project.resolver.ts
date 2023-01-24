import {Injectable} from '@angular/core';
import {ProjectServicesModule} from './project-services.module';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Project} from '../models/project';
import {Observable} from 'rxjs';
import {ProjectService} from './project.service';

@Injectable({
    providedIn: ProjectServicesModule
})
export class ProjectResolver implements Resolve<Project> {

    public constructor(private service : ProjectService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        return this.service.findById(route.params['id']);
    }
}