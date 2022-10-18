import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/app-core/services/spinner.service';
import { ToastrNotificationService } from 'src/app/app-core/services/toastr-notification.service';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  isPasswordVisible = false;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: ToastrNotificationService,
    private spinner: SpinnerService) { }

  get fg(): any {
    return this.formGroup.controls;
  }

  ngOnInit(): void {
    this.formGroup = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    if (this.formGroup.invalid) {
      return;
    }
    this.isSubmitted = true;
    this.spinner.show();
    this.auth.login(this.formGroup.value as LoginModel).subscribe(
      (res) => {
        if(res.token){
          this.toast.showSuccess('login successful','');
          this.router.navigate(['/employee']);
        }else{
          this.spinner.hide();
          this.toast.showError(res.data,'');
        }
        this.isSubmitted = false;
      },
      (err:HttpErrorResponse) => {
        this.toast.showError('Something went wrong','');
        this.spinner.hide();
        this.isSubmitted = false;
      }
    )
  }

}
