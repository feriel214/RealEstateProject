import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';
import { InstallationListComponent } from './house/installation/installation-list/installation-list.component';
import { RulesListComponent } from './house/rules/rules-list/rules-list.component';
import { CategoriesListComponent } from './house/categories/categories-list/categories-list.component';
import { EquipementListComponent } from './house/equipement/equipement-list/equipement-list.component';
import { PropertyAddComponent } from './house/property/property-add/property-add.component';
import { LocationListComponent } from './house/location/location-list/location-list.component';
import { BedListComponent } from './house/bed/bed-list/bed-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PropertyListComponent } from './house/property/property-list/property-list.component';
import { DefaultFrontComponent } from './front-office/layouts-front/default-front/default-front.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



const routes: Routes = [
 {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      //{ path: 'registration', component: RegistrationComponent},
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path:'', component:DefaultComponent,canActivate:[AuthGuard],
    children :[
      { path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
      { path:'account',component: ProfileComponent,canActivate:[AuthGuard]},
      { path:'post',component: PostComponent,canActivate:[AuthGuard]},
      { path:'equipement',component: EquipementListComponent,canActivate:[AuthGuard]},
      { path:'installation',component: InstallationListComponent,canActivate:[AuthGuard]},
      { path:'rules',component: RulesListComponent,canActivate:[AuthGuard]},
      { path:'categories',component: CategoriesListComponent,canActivate:[AuthGuard]},
      { path:'property',component: PropertyListComponent,canActivate:[AuthGuard]},
      { path:'location',component: LocationListComponent,canActivate:[AuthGuard]},  
      { path:'bed',component:BedListComponent,canActivate:[AuthGuard]},
      { path: 'Add/Property' ,component:PropertyAddComponent}
    ]
  },
  {
     path:'frontoffice', component: DefaultFrontComponent,canActivate:[AuthGuard] 
  },
  {path:'forbidden',component:ForbiddenComponent}
 // {path:'adminpanel',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



