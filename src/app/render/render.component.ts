import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CompOneComponent } from './comp-one/comp-one.component';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  @ViewChild('box') box: ElementRef<HTMLDivElement>;
  @ViewChild(CompOneComponent) child: CompOneComponent;

  constructor(private renderer: Renderer2, compOne: ElementRef) { }

  ngOnInit() { 

  }

  ngAfterViewInit() {
    // set box style with Renderer
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'gray')
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white')
    this.renderer.addClass(this.box.nativeElement, 'myClass')
    this.renderer.setAttribute(this.box.nativeElement, 'title', 'Test title')
    this.renderer.setStyle(this.box.nativeElement, 'padding', '10px')
  }

  changeChildProperty() {
    this.child.userName = 'Kunal';
  }

  callChildMethod() {
    this.child.clickMe();
  }

}
