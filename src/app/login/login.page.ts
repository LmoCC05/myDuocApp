import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public correo: string;
  public paswword: any;

  constructor() { 
    this.correo = '',
    this.paswword = '';
  }


}
