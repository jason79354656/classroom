import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FormCrearComponent } from './form-crear/form-crear.component';
import { CollagesComponent } from './collages/collages.component';

const routes: Routes = [
  
   {
    path: '',
    component: HomeComponent,
    children: [
    {
        path: ' ',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },{
      path: '',
      component: CollagesComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'crear-cuenta',
      component: CrearCuentaComponent
    },
    {
      path: 'account',
      component: FormCrearComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
