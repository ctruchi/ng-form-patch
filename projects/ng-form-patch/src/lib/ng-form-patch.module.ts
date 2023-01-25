import {InjectionToken, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {PatchParamDirective} from './patch-param.directive';
import {PatchPathDirective} from './patch-path.directive';
import {PatchDirective} from './patch.directive';
import {PatchServicesModule} from './services/patch-services.module';
import {Observable} from 'rxjs';

@NgModule({
    imports: [
        PatchServicesModule
    ],
    declarations: [
        PatchDirective,
        PatchParamDirective,
        PatchPathDirective
    ],
    exports: [
        PatchDirective,
        PatchParamDirective,
        PatchPathDirective
    ]
})
export class NgFormPatchModule {

    public static forRoot(config: PathConfig = {providers: []}): ModuleWithProviders<NgFormPatchModule> {
        return {
            ngModule: NgFormPatchModule,
            providers: config.providers
        }
    }

    public static forChild(config: PathConfig = {providers: []}): ModuleWithProviders<NgFormPatchModule> {
        return {
            ngModule: NgFormPatchModule,
            providers: config.providers
        }
    }
}

export interface PathConfig {
    providers: Provider[]
}

export const FORM_PATCH_SERVICE = new InjectionToken<ReadonlyArray<FormPatchService>>('FormPatchService');

export interface FormPatchService {
    patchKey: string;

    patch(params: { [key: string]: any }, operations: PatchOperation[]): Observable<void>
}

export interface PatchOperation {
    path: string;
    value: any;
}