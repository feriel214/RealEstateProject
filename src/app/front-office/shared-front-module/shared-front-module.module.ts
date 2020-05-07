import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { HeaderFrontComponent } from './header-front/header-front.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ 
    FooterFrontComponent,
    HeaderFrontComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FooterFrontComponent,
    HeaderFrontComponent
  ]
})
export class SharedFrontModuleModule { }
