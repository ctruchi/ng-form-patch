import {Directive, Inject, InjectionToken, Input, Optional, SkipSelf} from '@angular/core';
import {NgModel} from '@angular/forms';
import {PatchParamDirective} from './patch-param.directive';
import {PatchDirective} from './patch.directive';
import {PatchService} from './services/patch.service';
import {debounceTime, filter} from 'rxjs';

export const DEBOUNCE_PER_FIELD = new InjectionToken<string>('DEBOUNCE_PER_FIELD');

@Directive({
    selector: '[patch-path]'
})
export class PatchPathDirective {

    @Input('patch-path')
    public patchPath!: string;

    public constructor(ngModel: NgModel,
                       patch: PatchDirective,
                       params: PatchParamDirective,
                       patchService: PatchService,
                       @Inject(DEBOUNCE_PER_FIELD) debouncePerField?: number) {
        if (!ngModel || !ngModel.control) {
            throw Error('ngModel is required.')
        }

        ngModel.valueChanges!
            .pipe(
                filter(() => !!ngModel.dirty),
                debounceTime(debouncePerField ?? 300))
            .subscribe(value => {
                patchService.patch(patch.patch, this.patchPath, params.params, value)
            });

    }
}