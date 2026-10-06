import { Component, inject } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  readonly authService = inject(AuthService);

  logout():void{
    // this.authService.;
  }

}
