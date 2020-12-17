import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = 'admin@admin.com';
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.toastr.success('Vous êtes connecté :D Bienvenu O:)');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toastr.error('Vuillez vérifier vos credentials');
      }
    );
  }
}
