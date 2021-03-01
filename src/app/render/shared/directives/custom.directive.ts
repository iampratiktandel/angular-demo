import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.element.nativeElement.style.setProperty('background-color', 'yellow');
  }

  changeBg(color: string) {
    this.element.nativeElement.style.setProperty('background-color', color);
    this.element.nativeElement.style.setProperty('color', 'white');
  }
} 
