import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthRequest } from '../shared/auth.model';
import { SnackBarService } from '../shared/snackbar.service';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBarService: SnackBarService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/lists';
  }

  ngOnInit() {
    this.initForm();
    if (this.authService.getUser() !== null) {
      this.router.navigate([this.returnUrl]);
    }
  }

  signIn() {
    this.authService
      .signIn(
        new AuthRequest(
          this.loginForm.value.username,
          this.loginForm.value.password
        )
      )
      .pipe(first())
      .subscribe(
        data => {
          if (data === null) {
            this.snackBarService.openSnackBar('Incorrect username or password');
          }
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.snackBarService.openSnackBar('Error: ' + error.message);
        }
      );
  }

  signUp() {
    this.authService
      .signUp(
        new AuthRequest(
          this.loginForm.value.username,
          this.loginForm.value.password
        )
      )
      .pipe(first())
      .subscribe(
        data => {
          this.signIn();
        },
        error => {
          this.snackBarService.openSnackBar('Error: ' + error.message);
        }
      );
  }

  private initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
}
