import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[patch]'
})
export class PatchDirective {

    @Input()
    public patch!: string;
}