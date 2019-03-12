import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEmployeersComponent } from './employee/list-employeers.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import {FormsModule} from "@angular/forms" ; 
import {RouterModule , Routes} from '@angular/router';
const routes : Routes = [
  {path : "list" , component : ListEmployeersComponent}, 
  {path  : "create" , component : CreateEmployeeComponent}, 
  {path :"" , redirectTo :  "/list" , pathMatch :"full"}  
]; 

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeersComponent,
    CreateEmployeeComponent
  ],
  
  imports: [
    RouterModule.forRoot(routes), 
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
