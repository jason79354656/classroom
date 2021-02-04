import { Classroom } from './classroom.model';
import { Role } from './role.model';
import { User } from './user.model';

export interface Student{
    id?: string; 
    user?: User;
    classrooms:Classroom[];
}