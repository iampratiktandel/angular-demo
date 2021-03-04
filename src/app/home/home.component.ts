import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DevComponent } from '../dev/dev.component';
import { DynoComponent } from '../dyno/dyno.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // dynamicRef: ComponentRef<any>;
  // @ViewChild('dynoContainer', { read: ViewContainerRef }) dynoContainer: ViewContainerRef;

  // devRef: ComponentRef<any>;
  // @ViewChild('devContainer', { read: ViewContainerRef }) devContainer: ViewContainerRef;

  dynamicRef: ComponentRef<any>;
  @ViewChild('outputContainer', { read: ViewContainerRef }) dynoContainer: ViewContainerRef;


  constructor(private factoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  // Component One
  loadComponentOne () {
    this.createComponentOne();
  }

  createComponentOne() {
    if (this.dynamicRef) {
      this.dynamicRef.destroy();
    }
    const dynoComponent = this.factoryResolver.resolveComponentFactory<DynoComponent>(DynoComponent);
    this.dynamicRef = this.dynoContainer.createComponent<DynoComponent>(dynoComponent);
    this.dynamicRef.instance.data = 'This is Dyno Component';

    this.dynamicRef.instance.destroy.subscribe(() => this.dynamicRef.destroy());
  }

  // Component Two
  loadComponentTwo() {
    if (this.dynamicRef) {
      this.dynamicRef.destroy();
    }

    const devComponent = this.factoryResolver.resolveComponentFactory<DevComponent>(DevComponent);
    this.dynamicRef = this.dynoContainer.createComponent<DevComponent>(devComponent);
    this.dynamicRef.instance.data = 'This is Dev Component';

    this.dynamicRef.instance.destroy.subscribe(() => this.dynamicRef.destroy());
  }
}
