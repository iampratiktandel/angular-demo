import { Portal, ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-portal-cdk',
  templateUrl: './portal-cdk.component.html',
  styleUrls: ['./portal-cdk.component.css']
})
export class PortalCdkComponent implements OnInit, AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DemoComponent>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(DemoComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'component-portal-example',
  template: 'This is a demo component'
})
export class DemoComponent { }