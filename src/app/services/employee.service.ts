import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
  ) { }

  getEmployees = () => {
    let employeeList: Employee[];
    employeeList = [
      new Employee(1, "Arman Abzalov", "Founder"),
      new Employee(2, "Daria Shalyapina", "Chief"),
      new Employee(3, "Aliya Abdullina", "General manager"),
      new Employee(4, "Aruzhan Zhenis", "Administrator")
    ];

    return employeeList;

  }
}

