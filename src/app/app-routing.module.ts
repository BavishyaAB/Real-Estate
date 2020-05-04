import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { ViewpropertyComponent } from './viewproperty/viewproperty.component';
import { RegpropertyComponent } from './regproperty/regproperty.component';
import { BidComponent } from './bid/bid.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'viewproperty', component: ViewpropertyComponent},
  {path: 'regproperty', component: RegpropertyComponent},
  {path: 'bid', component: BidComponent},
  {path: 'user-home',component: UserHomeComponent},
  {path: '', component:HomepageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
