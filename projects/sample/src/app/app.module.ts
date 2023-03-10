import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgFormPatchModule} from 'ng-form-patch';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgFormPatchModule.forRoot({
            providers: [],
            debouncePerField: 400
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
