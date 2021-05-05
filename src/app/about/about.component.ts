import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {  EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  employeeList: Employee[];

  constructor(private employeeService: EmployeeService) { }


  // tslint:disable-next-line:typedef
    getEmployees() {
      this.employeeList = this.employeeService.getEmployees();


  }
}
