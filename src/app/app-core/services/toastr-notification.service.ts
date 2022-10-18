
import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {

  constructor(
    @Inject(PLATFORM_ID) public platformId: object,
    private toastr: ToastrService,
  ) { }

 showSuccess(message: string, title: string): void{
   this.toastr.success(message, title);
 }

 showError(message: string, title: string): void{
    this.toastr.error(message, title);
  }
}
