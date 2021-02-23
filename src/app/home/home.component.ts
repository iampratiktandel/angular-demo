import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DevComponent } from '../dev/dev.component';
import { DynoComponent } from '../dyno/dyno.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dynoRef: ComponentRef<any>;
  @ViewChild('dynoContainer', { read: ViewContainerRef }) dynoContainer: ViewContainerRef;

  devRef: ComponentRef<any>;
  @ViewChild('devContainer', { read: ViewContainerRef }) devContainer: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  // Component One
  loadComponentOne () {
    this.createComponentOne();
  }

  createComponentOne() {
    if (this.dynoRef) {
      this.dynoRef.destroy();
    }
    const dynoComponent = this.factoryResolver.resolveComponentFactory<DynoComponent>(DynoComponent);
    this.dynoRef = this.dynoContainer.createComponent<DynoComponent>(dynoComponent);
    this.dynoRef.instance.data = 'This is Dyno Component';

    this.dynoRef.instance.destroy.subscribe(() => this.dynoRef.destroy());
  }

  // Component Two
  loadComponentTwo() {
    if (this.devRef) {
      this.devRef.destroy();
    }

    const devComponent = this.factoryResolver.resolveComponentFactory<DevComponent>(DevComponent);
    this.devRef = this.devContainer.createComponent<DevComponent>(devComponent);
    this.devRef.instance.data = 'This is Dev Component';

    this.devRef.instance.destroy.subscribe(() => this.devRef.destroy());
  }
}
