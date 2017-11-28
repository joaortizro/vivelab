import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersComponent} from './users.component'

import {UsersRoutingModule} from'./users-routing.module'
import {UsersService} from '../services/users.service'
@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
