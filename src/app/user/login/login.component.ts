import { Component, OnInit } from '@angular/core';
import {PropertyDetailService} from'./../../shared/property-detail.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service:PropertyDetailService, private router: Router ) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    
      {this.router.navigateByUrl('/');}
      this.service.formModel.reset();
  }

  onLogin(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/equipement');
      },
      err => {
        if (err.status == 400)
        // this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        //else
          console.log(err);
      }
    );
  }
  onRegister() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
               //this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              // this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }


}

