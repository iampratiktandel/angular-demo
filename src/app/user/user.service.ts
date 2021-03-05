import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { User } from './user.model';

@Injectable()
export class UserService {

  constructor(public overlay: Overlay) { }

  openUserOverlay(userBtnRef: HTMLButtonElement, user: User){
    // const componentRef : ComponentRef<UserDetailComponent> = this.overlayConfig(userBtnRef);
    this.overlayConfig(userBtnRef, user);
  }

  overlayConfig(userBtnRef: HTMLButtonElement, user: User) : ComponentRef<UserDetailComponent>{

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
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            // offsetX: 45,
            // offsetY: 5


            // originX: 'start',
            // originY: 'bottom',
            // overlayX: 'center',
            // overlayY: 'center',
            offsetX: 80,
            offsetY: 3
          }
        ]
      );

    overlayConfig.hasBackdrop = true;

    const overlayRef = this.overlay.create(overlayConfig);
    const UserDetailPortal: ComponentPortal<UserDetailComponent> = new ComponentPortal<UserDetailComponent>(UserDetailComponent);
    const componentRef: ComponentRef<UserDetailComponent> = overlayRef.attach(UserDetailPortal);
    componentRef.instance.userData = user;

    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }
}
