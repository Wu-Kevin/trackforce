/**
 * @author Antony Lulciuc
 * @description Defines all possible navigatable routes for TrackForce application
 */

import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from '../components/form-component/form.component';
import {HomeComponent} from '../components/home/home.component';
import {ClientListComponent} from '../components/client-list/client-list.component';
import {LoginComponent} from '../components/login/login.component';
import {ClientMappedComponent} from '../components/client-mapped/client-mapped.component';
import {AssociateListComponent} from '../components/associate-list/associate-list.component';
import {BatchListComponent} from '../components/batch-list/batch-list.component';
import {CreateUserComponent} from '../components/create-user/create-user.component';
import {RootComponent} from '../components/root/root.component';
import {SkillsetComponent} from '../components/skillset/skillset.component';
import {BatchDetailsComponent} from '../components/batch-details/batch-details.component';
import { AssociateViewComponent } from '../components/associate-view/associate-view.component';

/**
 * Place paths here
 */

export const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },

    {
      path: 'client-listing',
      component: ClientListComponent
    },
    {
        path: 'client-mapped/:id',
        component: ClientMappedComponent
    },
    {
        path: 'associate-listing',
        component: AssociateListComponent
    },
    {
      path: 'associate-listing/:mapping/:status',
      component: AssociateListComponent
    },
    {
        path: 'batch-listing',
        component: BatchListComponent
    },
    {
        path: 'form-comp/:id',
        component: FormComponent
    },
    {
        path: 'create-user',
        component: CreateUserComponent
    },
    {
        path: 'root',
        component: RootComponent
    },
    {
        path: 'skillset/:id',
        component: SkillsetComponent
    },
    {
      path: 'associate-view/:id',
      component: AssociateViewComponent
    }

]
