import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestsLayoutComponent } from './rests-layout/rests-layout.component';
import { ContactsLayoutComponent } from './contacts-layout/contacts-layout.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './contacts-layout/comments/comments.component';
import {FormsModule} from '@angular/forms';
import {LoggingService} from './services/logging.service';
import { AboutComponent } from './about/about.component';
import { EmployeeService } from './services/employee.service';
import {RestsModule} from './rests-layout/rests/rests.module';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsLayoutComponent},
  {path: 'rests', component: RestsLayoutComponent},
  ];

  @NgModule({
  declarations: [
    AppComponent,
    RestsLayoutComponent,
    ContactsLayoutComponent,
    TitleComponent,
    FooterComponent,
    HomeComponent,
    CommentsComponent,
    AboutComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      RestsModule
    ],
  providers: [EmployeeService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
