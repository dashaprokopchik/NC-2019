import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {RouterModule,Routes} from "@angular/router";
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';

const appRoutes: Routes=[{path:'',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'projectChange',component:ProjectMenuComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ProjectMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
