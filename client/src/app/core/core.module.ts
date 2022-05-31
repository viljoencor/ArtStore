import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
// import {BreadcrumbModule} from 'xng-breadcrumb';
import { SharedModule } from '../shared/shared.module';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { TestErrorComponent } from './test-error/test-error.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NavBarComponent, SectionHeaderComponent, TestErrorComponent, ServerErrorComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    // BreadcrumbModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
   ],
   exports: [NavBarComponent]
})
export class CoreModule { }
