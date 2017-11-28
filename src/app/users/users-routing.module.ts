import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component'
import {UserComponent} from './user/user.component'
const usersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        
    },
    {
        path: ':id',
        loadChildren: './user/user.module#UserModule'

    }
    

];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class UsersRoutingModule {

}