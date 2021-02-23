import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-profile-overlay',
  templateUrl: './profile-overlay.component.html',
  styleUrls: ['./profile-overlay.component.css']
})
export class ProfileOverlayComponent implements OnInit {

  nextPosition: number = 0;
  constructor(public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  // viewProfile() {
  //   let config = new OverlayConfig();

  //   config.positionStrategy = this.overlay.position()
  //     .global()
  //     .centerVertically()
  //     .centerHorizontally();

  //   config.maxWidth = '500px';
  //   config.maxHeight = '600px';

  //   config.hasBackdrop = true;

  //   let overlayRef = this.overlay.create(config);

  //   overlayRef.backdropClick().subscribe(() => {
  //     overlayRef.dispose();
  //   });
    
  //   overlayRef.attach(new ComponentPortal(UserProfileComponent, this.viewContainerRef))
  // }

  openRotiniPanel() {
    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .left(`${this.nextPosition}px`)
        .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  
    overlayRef.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
  }
  
  isOpen = false;
}


@Component({
  selector: 'user-profile',
  template: '<ul class="demo"><li>Pratik</li><li>Intern</li></ul>'
})
export class UserProfileComponent { }

@Component({
  selector: 'rotini-panel',
  template: '<p class="demo-rotini">Rotini {{value}}</p>'
})
export class RotiniPanel {
  value: number = 9000;
}