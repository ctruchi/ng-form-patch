import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProjectComponent} from './project/project.component';
import {ProjectResolver} from './services/project.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: ':id',
                resolve: {
                    project: ProjectResolver
                },
                component: ProjectComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingModule {
}
