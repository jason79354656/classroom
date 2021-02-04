import { HomeRoutingModule } from './home-routing.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { FormCrearComponent } from './form-crear/form-crear.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule  } from '@angular/forms';
import { CollagesComponent } from './collages/collages.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from '../shared/header/header.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';


@NgModule({
  declarations: [ 
    HomeComponent,
    FooterComponent,
   // CrearCuentaComponent,
    FormCrearComponent, 
    LoginComponent, 
    CollagesComponent,
    HeaderComponent,
    CrearCuentaComponent
    // InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  
    
  ],
  exports: [HomeComponent, FooterComponent,HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
