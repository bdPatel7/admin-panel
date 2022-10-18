import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/app-core/services/base-api.service';
import { UtilService } from 'src/app/app-core/services/util.service';
import { AuthRoutingModule } from '../auth-routing.module';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LOGIN } from 'src/app/app-core/consts/api-url';

@Injectable()
export class AuthService extends BaseApiService {

  constructor(
    protected http: HttpClient,
    private utilService: UtilService,
    // private router: Router,
) {
  super(http);
}

  login(model: LoginModel): Observable<any> {
    return this.makeRequest('POST', LOGIN , model).pipe(
        tap((response) => {
            if (response.token) {
                this.saveToken(response.token);
                return response;
            }
        })
    );
  }

  saveToken(token:string): void{
    this.utilService.setKeyVakue('token', token);
  }
}
