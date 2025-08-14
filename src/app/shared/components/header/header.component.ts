import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // أضيفي السطر ده 👈
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule], // أضيفي RouterModule هنا 👈
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLogged : boolean = false ;
  dropdown : boolean = false ;
  username : string = "" ;

  constructor(private _auth : AuthserviceService ,
              private router : Router
  ){};

  ngOnInit() : void {
    this.isLogged = this._auth.isLogged;
     this.username = localStorage.getItem("userName") || "" ;
  }


  toggleDropdown() {
    this.dropdown = !this.dropdown ;

  }

  logout() {
    this._auth.logout();
    this.isLogged = false ;
    this.router.navigate(['/allproducts'])
  }


}
