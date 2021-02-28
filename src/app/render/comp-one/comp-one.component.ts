import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  userName: string = 'Pratik';

  @ViewChild('compOne') compOne: ElementRef<HTMLDivElement>;
  @ViewChild('divOne') divOne: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.compOne.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.compOne.nativeElement, 'padding', '1rem');

    this.createDiv();
  }

  clickMe() {
    alert(this.userName);
  }

  /* creates a Div and appends it to #divOne */
  private createDiv() {
    const divElement = this.renderer.createElement('div');
    const divText = this.renderer.createText('Div created with createDiv()');
    this.renderer.appendChild(divElement, divText);
    this.renderer.appendChild(this.divOne.nativeElement, divElement)

    this.setDivStyle();
  }

  /* set Div style */
  private setDivStyle() {
    this.renderer.setStyle(this.divOne.nativeElement, 'backgroundColor', 'blue');
    this.renderer.setStyle(this.divOne.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(this.divOne.nativeElement, 'margin', '1rem');
    this.renderer.setStyle(this.divOne.nativeElement, 'padding', '1rem');
    this.renderer.setStyle(this.divOne.nativeElement, 'text-decoration', 'underline');
    this.renderer.addClass(this.divOne.nativeElement, 'div-one');
  }
}
