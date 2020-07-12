import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule}  from  '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import{MatTabsModule} from '@angular/material/tabs';
import{ MatFormFieldModule} from'@angular/material/form-field';
import{ MatIconModule} from '@angular/material/icon';
import { UserLoginComponent } from './user-login/user-login.component';
import{ReactiveFormsModule}from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import{AuthService} from './auth.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LeadDashboardComponent } from './lead-dashboard/lead-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreateQuizComponent } from './admin-dashboard/create-quiz/create-quiz.component';
import { ViewResultComponent } from './admin-dashboard/view-result/view-result.component';
import{  AttemptQuizComponent} from './user-dashboard/attempt-quiz/attempt-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    LeadDashboardComponent,
    UserDashboardComponent,
    HomeComponentComponent,
    CreateQuizComponent,
    ViewResultComponent,
    AttemptQuizComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
   MatCheckboxModule,
   MatIconModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule{
  
}
 
