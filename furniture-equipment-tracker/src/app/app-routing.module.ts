import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationService } from './registration.service';
import { RegistrationComponent } from './registration/registration.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'vendor',component:VendorComponent},
  {path:'vendor/:id',component:VendorUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
