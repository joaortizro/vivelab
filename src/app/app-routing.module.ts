import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UsersComponent} from './users/users.component';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}