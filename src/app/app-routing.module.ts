import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {OrdersComponent} from './orders/orders.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"orders",component:OrdersComponent},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
