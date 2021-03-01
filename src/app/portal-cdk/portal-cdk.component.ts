import { Portal, ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-portal-cdk',
  templateUrl: './portal-cdk.component.html',
  styleUrls: ['./portal-cdk.component.css']
})
export class PortalCdkComponent implements OnInit, AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<any>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DemoComponent>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(DemoComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);


    this.renderer.setStyle(this.domPortalContent.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.domPortalContent.nativeElement, 'backgroundColor', 'gray');

    // this.renderer.setStyle(this.templatePortalContent.elementRef.nativeElement, 'color', 'blue');
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'component-portal-example',
  template: 'This is a demo component'
})
export class DemoComponent { }