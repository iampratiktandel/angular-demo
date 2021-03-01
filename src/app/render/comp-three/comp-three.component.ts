import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { CustomDirective } from '../shared/directives/custom.directive';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  @ViewChild(CustomDirective) customDir: CustomDirective;

  @ViewChildren('compFour', {read: ElementRef}) childComp: QueryList<ElementRef>

  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.customDir.changeBg(color);
  }

  removeChild() {
    this.renderer.removeChild(this.host.nativeElement, this.childComp.first.nativeElement);
  }

}
