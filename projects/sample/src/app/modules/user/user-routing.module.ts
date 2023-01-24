import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserResolver} from './services/user.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: ':id',
                resolve: {
                    user: UserResolver
                },
                component: UserComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {
}
