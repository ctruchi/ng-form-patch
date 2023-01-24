import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectComponent} from './project/project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {FormsModule} from '@angular/forms';
import {ProjectServicesModule} from './services/project-services.module';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        ProjectServicesModule,
        FormsModule
    ],
    declarations: [
        ProjectComponent
    ]
})
export class ProjectModule {
}