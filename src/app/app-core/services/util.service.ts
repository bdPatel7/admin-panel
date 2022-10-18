import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private router:Router,
    private spinner: SpinnerService
  ) { }

  setKeyVakue(key:string, value: string): void{
    localStorage.setItem(key ,value);
  }

  isAuthenticated(): boolean {
    return !!this.getValue('token');
  }
  
  getValue(key: string): any {
    return localStorage.getItem(key);
  }

  logout(): void{
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    },1000);
  }
}
