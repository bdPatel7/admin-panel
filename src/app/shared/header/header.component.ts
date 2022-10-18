import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/app-core/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  get isAuthenticated(): boolean{
    return this.util.isAuthenticated();
  }

  ngOnInit(): void {
  }

  logout():void{
    this.util.logout();
  }
}
