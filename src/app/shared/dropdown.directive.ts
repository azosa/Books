import { Directive, HostListener, HostBinding } from '@angular/core'
@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective {
    @HostBinding('class.close') isClosed=true;

    @HostListener('click') toggleOpen(){
this.isClosed=!this.isClosed;
    }
}
