import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Injectable()
export class UserService {

  constructor(public overlay: Overlay) { }

  openUserOverlay(userBtnRef: HTMLButtonElement){
    // const componentRef : ComponentRef<UserDetailComponent> = this.overlayConfig(userBtnRef);
    this.overlayConfig(userBtnRef);
  }

  overlayConfig(userBtnRef: HTMLButtonElement) : ComponentRef<UserDetailComponent>{

    const overlayConfig : OverlayConfig = new OverlayConfig();

    /* GlobalPositionStrategy */
    // overlayConfig.positionStrategy = this.overlay.position().global()
    // .centerHorizontally()
    // .centerVertically();

    /* ConnectedPostionStrategy */
    overlayConfig.positionStrategy = this.overlay.position().flexibleConnectedTo(userBtnRef)
      .withPositions(
        [
          {
            panelClass: 'top-right',
            // originX: 'start',
            // originY: 'bottom',
            // overlayX: 'end',
            // overlayY: 'top',
            // offsetX: 45,
            // offsetY: 5


            originX: 'start',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'center',
            offsetX: 45,
            offsetY: 30
          }
        ]
      );

    overlayConfig.hasBackdrop = true;

    const overlayRef = this.overlay.create(overlayConfig);
    const UserDetailPortal: ComponentPortal<UserDetailComponent> = new ComponentPortal<UserDetailComponent>(UserDetailComponent);
    const componentRef: ComponentRef<UserDetailComponent> = overlayRef.attach(UserDetailPortal);

    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }
}
