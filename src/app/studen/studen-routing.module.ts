import { ClassroomsComponent } from './components/classrooms/classrooms.component';
import { StudenComponent } from './studen.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ClassActivityComponent } from './class-activity/class-activity.component';


const routes: Routes = [
 {
    path: 'student/:id',
   component: ClassroomsComponent,
   children: [
    {
      path: ':idmat',
     component : ClassActivityComponent,
     children: [
      {
        path: 'actividades',
        component :ActividadComponent,
      }
    
    ] }
    
   ]
  
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudenRoutingModule { }