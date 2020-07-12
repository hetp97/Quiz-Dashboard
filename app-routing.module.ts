import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreateQuizComponent } from './admin-dashboard/create-quiz/create-quiz.component';
import { ViewResultComponent } from './admin-dashboard/view-result/view-result.component';
import{  AttemptQuizComponent} from './user-dashboard/attempt-quiz/attempt-quiz.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent
  },
 
 
  {
    path:'login',
    component: UserLoginComponent 
  },

  {
    path:'register',
    component: UserRegisterComponent
  },

  {
    path:'admin-dashboard',
    component: AdminDashboardComponent,
    children:[
      {
        path:'create-quiz',
        component: CreateQuizComponent
      },
      {
        path:'view-result',
        component: ViewResultComponent
      }

    ]
    
  },


  {
    path:'lead-dashboard',
    component: LeadDashboardComponent,
  },
  
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    children:[
      {
        path:'attempt-quiz',
        component:AttemptQuizComponent
      },

    ]
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
