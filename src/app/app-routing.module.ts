import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiesComponent } from './servies/servies.component';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { MapComponent } from './map/map.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactFromComponent } from './react-from/react-from.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"serives",component:ServiesComponent},
  {path:"singup",component:SingupComponent},
  {path:"singin",component:SinginComponent},
  {path:"map",component:MapComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"reactfrom",component:ReactFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
