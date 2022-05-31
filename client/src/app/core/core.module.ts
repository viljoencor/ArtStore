import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule
    // RouterModule,
    // BreadcrumbModule,
    // SharedModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true
    // })
   ],
   exports: [NavBarComponent]
})
export class CoreModule { }
