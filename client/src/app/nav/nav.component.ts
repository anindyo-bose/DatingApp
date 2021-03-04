import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = { }
  loggedIn: boolean = false;
  test :any;

  constructor(private  accountService : AccountService) { }

  ngOnInit(): void {
    this.getUser();
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    },error=>{
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
    this.loggedIn = false;
  }

  getUser(){
    let users = JSON.parse(localStorage.getItem('user'));
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!users;
    });
  }

}
