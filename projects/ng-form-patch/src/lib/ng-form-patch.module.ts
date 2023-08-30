import {InjectionToken, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {PatchParamDirective} from './patch-param.directive';
import {DEBOUNCE_PER_FIELD, PatchPathDirective} from './patch-path.directive';
import {PatchDirective} from './patch.directive';
import {PatchServicesModule} from './services/patch-services.module';
import {Observable} from 'rxjs';
import {BUFFER_PER_PATCH} from './services/patch.service';

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

    public static forRoot(config: PathConfig = DEFAULT_CONFIG): ModuleWithProviders<NgFormPatchModule> {
        return {
            ngModule: NgFormPatchModule,
            providers: [
                ...config.providers,
                {provide: BUFFER_PER_PATCH, useValue: config.bufferPerPatch},
                {provide: DEBOUNCE_PER_FIELD, useValue: config.debouncePerField}
            ]
        }
    }

    public static forChild(config: PathConfig = DEFAULT_CONFIG): ModuleWithProviders<NgFormPatchModule> {
        const providers = [
            ...config.providers,
        ];
        if (config.bufferPerPatch) {
            providers.push({provide: BUFFER_PER_PATCH, useValue: config.debouncePerField});
        }
        if (config.debouncePerField) {
            providers.push({provide: DEBOUNCE_PER_FIELD, useValue: config.debouncePerField});
        }
        return {
            ngModule: NgFormPatchModule,
            providers: providers
        }
    }
}

export interface PathConfig {
    providers: Provider[];
    debouncePerField?: number;
    bufferPerPatch?: number;
}

const DEFAULT_CONFIG: PathConfig = {
    providers: [],
};

export const FORM_PATCH_SERVICE = new InjectionToken<ReadonlyArray<FormPatchService>>('FormPatchService');

export interface FormPatchService {
    patchKey: string;

    patch<T>(params: { [key: string]: any }, operations: PatchOperation[]): Observable<T>
}

export interface PatchOperation {
    op: PatchOperationOperator;
    path: string;
    value: any;
}

export type PatchOperationOperator = 'replace' | 'add' | 'remove';