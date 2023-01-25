import {Inject, Injectable} from '@angular/core';
import {PatchServicesModule} from './patch-services.module';
import {FORM_PATCH_SERVICE, FormPatchService} from '../ng-form-patch.module';

@Injectable({
    providedIn: PatchServicesModule
})
export class PatchService {

    public constructor(@Inject(FORM_PATCH_SERVICE) private patchServices: FormPatchService[]) {
    }

    public patch(patch: string, patchPath: string, params: { [key: string]: any; }, value: any): void {
        const service = this.getService(patch);

        service.patch(params, [{path: patchPath, value: value}]).subscribe();
    }

    private getService(patch: string): FormPatchService {
        let service = this.patchServices.find(({patchKey}) => patchKey === patch);
        if (!service) {
            throw new Error(`No FormPatchService for ${patch}`);
        }
        return service;
    }
}