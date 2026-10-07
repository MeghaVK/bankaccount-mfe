import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../core/auth.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);
  readonly isLoading = signal(false);
  readonly errorMessage = signal('');
  credentials: LoginRequest = {
    email: null,
    password: ''
  };
  loginForm = this.fb.nonNullable.group({
    email: ['megha@test.com',
      [Validators.required, Validators.email]
    ],
    password: ['Megha@123', [Validators.required, Validators.minLength(6)]]
  });


  login(): void {
    // debugger;
    console.log(this.loginForm.value)
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;;
    }
    this.credentials.email = this.loginForm.getRawValue().email;
    this.credentials.password = this.loginForm.getRawValue().password ?? '';
    console.log(this.credentials)
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.authService.login(this.credentials)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.isLoading.set(false);

          this.toastr.success(
            `Welcome ${res.user.name}!, Login Successful`
          )

          this.router.navigate(['dashboard']);

        },
        error: error => {
          console.log(error)
          this.isLoading.set(false);
          ;
          const message =
            error?.error?.message ||
            'Login failed. Please try again.';
          this.errorMessage.set(error?.error?.message || 'Login failed. Please try again later.');


          this.toastr.error(
            message,
            'Authentication failed'
          );
        }
      })
  }


  logout(): void {

  this.authService.logout();

  this.router.navigate([
    '/login'
  ]);

}
}
