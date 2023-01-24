import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {UserRoutingModule} from './user-routing.module';
import {UserServicesModule} from './services/user-services.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        UserServicesModule,
        FormsModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {
}