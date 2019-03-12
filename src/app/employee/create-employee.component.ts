import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };
  departments : Department[]= [
{id : 1 , name:"Help Desk"},
{id : 2 , name:"Web"},
{id : 3 , name:"CRM"}
];
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
  ngOnInit() {
 
  }

}
