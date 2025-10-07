import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirProd]',
  standalone: true,
})
export class DirProd {
  constructor(private ele: ElementRef) {}

  @HostListener('mouseover') func() {
    this.ele.nativeElement.style.backgroundColor = 'red';
    this.ele.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') func2() {
    this.ele.nativeElement.style.backgroundColor = 'white';
    this.ele.nativeElement.style.color = 'black';
  }
}
