import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule, } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox' ;
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
const MaterialComponents = [
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  LayoutModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatExpansionModule,
  MatCardModule,
  

]

@NgModule({

  imports: [
    MaterialComponents
    
  ],
  exports : [
    MaterialComponents
  ]
})
export class MaterialModule { }
