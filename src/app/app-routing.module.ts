import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AddClientComponent } from './components/add-client/add-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {ClientsComponent} from './components/clients/clients.component';
import {SettingsComponent} from './components/settings/settings.component';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {path:'',component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'client/add',component: AddClientComponent, canActivate:[AuthGuard]},
  {path:'client/edit/add',component: EditClientComponent,canActivate:[AuthGuard]},
  {path:'client/:id',component: ClientDetailsComponent,canActivate:[AuthGuard]},
  {path:'settings',component: SettingsComponent,canActivate:[AuthGuard]},
  {path:'client/detail',component:ClientDetailsComponent},
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
