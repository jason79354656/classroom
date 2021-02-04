
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenComponent } from './studen.component';
import { StudenRoutingModule } from './studen-routing.module';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { ClassroomsComponent } from './components/classrooms/classrooms.component';

import { FormsModule } from '@angular/forms';
import { RegisterMatComponent } from './components/register-mat/register-mat.component';
import { ClassActivityComponent } from './class-activity/class-activity.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { HomeModule } from '../home/home.module';
import { AvisosComponent } from './components/avisos/avisos.component';
import { RecursoComponent } from './components/recurso/recurso.component';




@NgModule({
  declarations: [
    StudenComponent, 
    ClassroomComponent, 
    ClassroomsComponent, 
    RegisterMatComponent, 
    ClassActivityComponent,
    ActividadComponent,
    AvisosComponent,
    RecursoComponent
  ],
  imports: [
    CommonModule,
    StudenRoutingModule,
    HomeModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [StudenComponent],
})
export class StudenModule { }
