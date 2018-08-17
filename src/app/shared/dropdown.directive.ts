import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) { }

  @HostListener('click') handleClick() {
    this.elRef.nativeElement.classList.toggle('open');
  }
}
