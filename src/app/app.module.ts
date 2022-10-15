import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallTrainComponent } from './viewall-train/viewall-train.component';
import { ListallComponent } from './listall/listall.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:ViewallTrainComponent
  },
  {
    path:"all",component:ListallComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewallTrainComponent,
    ListallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
