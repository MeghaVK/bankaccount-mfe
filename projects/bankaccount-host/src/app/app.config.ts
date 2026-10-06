import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // provideHttpClient(
    //   withInterceptors([auth])
    // )

    provideToastr({
      timeOut:4000,
      positionClass:'toast-top-right',
      closeButton:true,
      progressBar:true
    })
  ]
};
