import { Component, inject } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  readonly authService = inject(AuthService);
  router = inject(Router);

 logout(): void {

  this.authService.logout();

  this.router.navigate([
    '/login'
  ]);

}

}
