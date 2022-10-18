import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeModel } from './../../models/employee.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private api: EmployeeService) { }

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this.route.data.subscribe(
      (res) => {
       if(res.data.length){
        this.formGroup = this.createDetailsForm(res.data[0]);
       }
      }
    )

  }

  private createDetailsForm(data: EmployeeModel): FormGroup {
    const { dname, birthDate, joinDate, ename, ep, er} = data;
    return this.fb.group({
      dname: [{value: dname, disabled: true}],
      dob: [{value: birthDate, disabled: true}],
      doj: [{value: joinDate, disabled: true}],
      ename: [{value: ename, disabled: true}],
      ep: [{value: ep, disabled: true}],
      er: [{value: er, disabled: true}]
    })
  }

  showResume(): void{
    this.api.download(this.formGroup.value.er)
    .subscribe((blob: Blob): void => {
      const file = new Blob([blob], {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    });
  }
}
