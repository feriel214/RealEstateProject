import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFrontComponent } from './default-front/default-front.component';
import { HousesComponent } from './houses/houses.component';
import { RouterModule } from '@angular/router';
import { SharedFrontModuleModule } from '../shared-front-module/shared-front-module.module';
import { MaterialModule } from 'src/app/material/material/material.module';




@NgModule({
  declarations: [
    DefaultFrontComponent,
    HousesComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedFrontModuleModule,
    MaterialModule
  ]
})
export class LayoutsFrontModule { }
