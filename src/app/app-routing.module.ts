import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortalCdkComponent } from './portal-cdk/portal-cdk.component';
import { ProfileOverlayComponent } from './profile-overlay/profile-overlay.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule), pathMatch: 'full' },
  // { path: 'intern', loadChildren: () => import('./intern/intern.module').then(m => m.InternModule) },
  { path: 'rxjs', loadChildren: () => import('./rxj/rxj.module').then(m => m.RxjModule) },
  { path: 'portal', component: PortalCdkComponent },
  { path: 'overlay', component: ProfileOverlayComponent },
  // { path: 'di', component: ProviderComponent },
  { path: 'operators', loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule) },
  { path: 'provider', loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule) },
  { path: 'render', loadChildren: () => import('./render/render.module').then(m => m.RenderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }