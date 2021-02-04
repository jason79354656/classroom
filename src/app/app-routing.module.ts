import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {
     path: ' ', 
     loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
   },
   {
     path: 'student/:id',
     loadChildren:() => import('./studen/studen.module').then(mod=> mod.StudenModule)
   },
   { 
     path: 'teacher/:id', 
     loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) 
    },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
