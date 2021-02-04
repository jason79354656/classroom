import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { CretingClassroomComponent } from './creting-classroom/creting-classroom.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { DetailsClassComponent } from './details-class/details-class.component';
import { ClassActivitiesComponent } from './class-activities/class-activities.component';
import { ClassAdComponent } from './class-ad/class-ad.component';
import { ClassResourceComponent } from './class-resource/class-resource.component';


const routes: Routes = [
  {
    path: 'teacher/:id',
   component: ClassroomsComponent,
   children: [
    ]
  },
  {
    path: 'teacher/:id/add-classroom',
   component : CretingClassroomComponent
   
  },
  {
    path: 'teacher/:id/:idmat',
   component :DetailsClassComponent,
   children: [
    {
      path: 'actividades',
     component : ClassActivitiesComponent
     
    },
    {
      path: 'avisos',
     component : ClassAdComponent
     
    },
    {
      path: 'recursos',
     component : ClassResourceComponent
     
    },
  ]
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
