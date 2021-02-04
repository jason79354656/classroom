import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { InicioComponent } from './inicio/inicio.component';
import { CretingClassroomComponent } from './creting-classroom/creting-classroom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { DetailsClassComponent } from './details-class/details-class.component';
import { ClassActivitiesComponent } from './class-activities/class-activities.component';
import { ClassAdComponent } from './class-ad/class-ad.component';
import { ClassResourceComponent } from './class-resource/class-resource.component';

@NgModule({
  declarations: [TeacherComponent, 
                  InicioComponent, 
              CretingClassroomComponent, 
              ClassroomsComponent, 
              ClassroomComponent, DetailsClassComponent, ClassActivitiesComponent, ClassAdComponent, ClassResourceComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class TeacherModule { }
