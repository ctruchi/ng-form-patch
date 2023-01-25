import {Directive, Input, Optional, SkipSelf} from '@angular/core';

@Directive({
    selector: '[patch-param]'
})
export class PatchParamDirective {

    @Input('patch-param')
    public patchParam!: { [key: string]: any };

    public constructor(@SkipSelf() @Optional() private parent?: PatchParamDirective) {
    }

    public get params(): { [key: string]: any } {
        return Object.assign({}, this.parent?.params ?? {}, this.patchParam);
    }

}