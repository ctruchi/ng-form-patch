import {Component} from '@angular/core';
import {Project, ProjectCategory} from '../models/project';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent {

    public project!: Project;
    public categories: ProjectCategory[] = [
        ProjectCategory.HOME,
        ProjectCategory.WORK
    ]

    public constructor(route: ActivatedRoute) {
        route.data.subscribe(data => this.project = data['project']);
    }
}
