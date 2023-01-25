import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {UserRoutingModule} from './user-routing.module';
import {UserServicesModule} from './services/user-services.module';
import {FormsModule} from '@angular/forms';
import {FORM_PATCH_SERVICE, NgFormPatchModule} from 'ng-form-patch';
import {UserService} from './services/user.service';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        UserServicesModule,
        FormsModule,
        NgFormPatchModule.forChild({
            providers: [
                {
                    provide: FORM_PATCH_SERVICE,
                    multi: true,
                    useExisting: forwardRef(() => UserService)
                }
            ]
        })
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {
}