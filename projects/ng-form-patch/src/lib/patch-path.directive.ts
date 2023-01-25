import {Directive, Input, Optional, SkipSelf} from '@angular/core';
import {NgModel} from '@angular/forms';
import {PatchParamDirective} from './patch-param.directive';
import {PatchDirective} from './patch.directive';
import {PatchService} from './services/patch.service';
import {debounceTime} from 'rxjs';

@Directive({
    selector: '[patch-path]'
})
export class PatchPathDirective {

    @Input('patch-path')
    public patchPath!: string;

    public constructor(ngModel: NgModel,
                       patch: PatchDirective,
                       params: PatchParamDirective,
                       patchService: PatchService) {
        if (!ngModel || !ngModel.control) {
            throw Error('ngModel is required.')
        }

        ngModel.valueChanges!
            .pipe(debounceTime(300))
            .subscribe(value => {
                patchService.patch(patch.patch, this.patchPath, params.params, value)
            });

    }
}