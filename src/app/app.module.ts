import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallTrainComponent } from './viewall-train/viewall-train.component';
const appRoutes:Routes=[
  {
    path:"",component:ViewallTrainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewallTrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
