import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // project:Project;
  // task:Task;
  // user:User;
  // filter:string;
  isProject:boolean=false;
  isTask:boolean=false;
  isUser:boolean=false;
  isFilters:boolean=false;
  constructor() { }
  ngOnInit() {
  }
  addProject(){
this.isProject=!this.isProject;
  };
  addTask(){
this.isTask=!this.isTask;
  };
  addUser(){
this.isUser=!this.isUser;
  };
  addFilter(){

  };
}

// interface Project {
//   code: string,
//   summary: string
// }
//
// interface Task {
//   projectCode: string,
//   description: string,
//   priority: string,
//   dueDate: string,
//   estimation: string,
//   assignee: string
// }
//
// interface User {
//   personalData: string,
//   userRole: string
// }
