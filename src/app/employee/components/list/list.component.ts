import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from 'src/app/app-core/services/spinner.service';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  startDate!: any;
  endDate!: any;
  allList: EmployeeModel[] = []
  filterList: EmployeeModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.route.data.subscribe(
      (res) => {
        this.allList = res.data;
        this.filterList = res.data;
      }
    )
  }

  filterData(){
    this.spinner.show();
    this.filterList = this.allList.filter(((a: EmployeeModel) => (a.joinDate.after(this.startDate) || a.joinDate.equals(this.startDate)) && (a.joinDate.before(this.endDate) || a.joinDate.equals(this.endDate))))
    setTimeout(() => {
      this.spinner.hide();
    },1000);
  }

  resetData(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },1000);
    this.endDate = undefined;
    this.startDate = undefined;
    this.filterList = this.allList;
  }

}
