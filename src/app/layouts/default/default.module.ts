import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/post/post.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataTableComponent } from 'src/app/modules/data-table/data-table.component';
import { MaterialModule } from 'src/app/material/material/material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    PostComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModuleModule,
    MaterialModule
  ]
})
export class DefaultModule { }
