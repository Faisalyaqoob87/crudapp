import { Component, Input, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  isAdmin=false;
  isPatient=false;
  isDoctor=false;
constructor(private service:SignupService){}
  ngOnInit(): void {debugger
    this.service.userrole=sessionStorage.getItem('role');
    this.rolefunction();
  }

rolefunction(){
  if(this.service.userrole==='Admin')
  {
    this.isAdmin=true;
  }
  else if(this.service.userrole==='Patient')
  {
    this.isPatient=true;
  }
  else if(this.service.userrole==='Doctor')
  {
    this.isDoctor=true;
  }
}
}
