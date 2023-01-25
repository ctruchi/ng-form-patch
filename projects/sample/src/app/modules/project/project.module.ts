import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectComponent} from './project/project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {FormsModule} from '@angular/forms';
import {ProjectServicesModule} from './services/project-services.module';
import {FormPatchService, NgFormPatchModule} from 'ng-form-patch';
import {ProjectService} from './services/project.service';
import {FORM_PATCH_SERVICE} from 'ng-form-patch';
import {Observable, of} from 'rxjs';
import {ProjectModuleService} from './services/projectModule.service';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        ProjectServicesModule,
        FormsModule,
        NgFormPatchModule.forChild({
            providers: [
                {
                    provide: FORM_PATCH_SERVICE,
                    multi: true,
                    useExisting: forwardRef(() => ProjectService)
                },
                {
                    provide: FORM_PATCH_SERVICE,
                    multi: true,
                    useExisting: forwardRef(() => ProjectModuleService)
                }
            ]
        })
    ],
    declarations: [
        ProjectComponent
    ]
})
export class ProjectModule {
}