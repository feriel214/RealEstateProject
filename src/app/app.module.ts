import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthInterceptor } from './auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' 


import{ PropertyDetailService} from'./shared/property-detail.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';


import { DefaultModule } from './layouts/default/default.module';
//import { AppRoutingModule } from './app-routing.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material/material.module';
import { InstallationListComponent } from './house/installation/installation-list/installation-list.component';
import { InstallationAddComponent } from './house/installation/installation-add/installation-add.component';
import { InstallationEditComponent } from './house/installation/installation-edit/installation-edit.component';
import { RulesAddComponent } from './house/rules/rules-add/rules-add.component';
import { RulesEditComponent } from './house/rules/rules-edit/rules-edit.component';
import { RulesListComponent } from './house/rules/rules-list/rules-list.component';
import { CategoriesEditComponent } from './house/categories/categories-edit/categories-edit.component';
import { CategoriesAddComponent } from './house/categories/categories-add/categories-add.component';
import { CategoriesListComponent } from './house/categories/categories-list/categories-list.component';
import { EquipementAddComponent } from './house/equipement/equipement-add/equipement-add.component';
import { EquipementEditComponent } from './house/equipement/equipement-edit/equipement-edit.component';
import { EquipementListComponent } from './house/equipement/equipement-list/equipement-list.component';
import { PropertyAddComponent } from './house/property/property-add/property-add.component';
import { PropertyEditComponent } from './house/property/property-edit/property-edit.component';
import { PropertyListComponent } from './house/property/property-list/property-list.component';
import { LocationAddComponent } from './house/location/location-add/location-add.component';
import { LocationEditComponent } from './house/location/location-edit/location-edit.component';
import { LocationListComponent } from './house/location/location-list/location-list.component';
import { BedAddComponent } from './house/bed/bed-add/bed-add.component';
import { BedEditComponent } from './house/bed/bed-edit/bed-edit.component';
import { BedListComponent } from './house/bed/bed-list/bed-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PropertiesComponent } from './frontend/properties/properties.component';
import { ToastrModule } from 'ngx-toastr';
import { LayoutsFrontModule } from './front-office/layouts-front/layouts-front.module';
import { UploadImagesComponent } from './house/upload-images/upload-images.component';
import { MatDialogModule , MatDialogRef} from '@angular/material/dialog';
import { ForbiddenComponent } from './forbidden/forbidden.component';



 


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    InstallationListComponent,
    InstallationAddComponent,
    InstallationEditComponent,
    RulesAddComponent,
    RulesEditComponent,
    RulesListComponent,
    CategoriesEditComponent,
    CategoriesAddComponent,
    CategoriesListComponent,
    EquipementAddComponent,
    EquipementEditComponent,
    EquipementListComponent,
    PropertyAddComponent,
    PropertyEditComponent,
    PropertyListComponent,
    LocationAddComponent,
    LocationEditComponent,
    LocationListComponent,
    BedAddComponent,
    BedEditComponent,
    BedListComponent,
    ProfileComponent,
    PropertiesComponent,
    UploadImagesComponent,
    ForbiddenComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   // RouterModule.forRoot(
     // [
       // { path: "", component: LoginComponent}
     // ]
    //),
    BrowserAnimationsModule,
    DefaultModule,
    SharedModuleModule,
    RouterModule,
    MaterialModule,
    MatTableModule,
    LayoutsFrontModule,
    MatDialogModule
    
   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    PropertyDetailService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MatDialogRef,
      useValue: {}
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
