import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Patient } from '../data/data.models';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  patient!: Patient;
  index!: number;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      if (params.id) {
        this.index = params.id;
        console.log(this.dataService.get(params.id));
        this.patient = this.dataService.get(params.id);
      } else {
        this.index = params.id;
      }
      console.log(this.index);
    });
  }

  onFormSubmit(form: NgForm) {
    // Object.keys(form).forEach((field) => {
    //   // {1}
    //   const control = form.controls[field]; // {2}
    //   control.markAsTouched({ onlySelf: true });] // {3}
    // });
    Object.values(form.controls).forEach( ctl => {
      ctl.markAsTouched({ onlySelf: true }) // {3}
} );
    if(form.valid){
      this.dataService.addPatient(
        new Patient(
          form.value.firstName,
          form.value.lastName,
          form.value.birthDate,
          form.value.gender,
          form.value.cnp,
          form.value.phoneNumber,
          this.getOrdNumber()
        )
      );
  
      this.router.navigateByUrl('');

    }else{console.log("validation error")}

   
  }
  onEditSubmit(form: NgForm) {
    this.dataService.updatePatient(
      this.index,
      new Patient(
        form.value.firstName,
        form.value.lastName,
        form.value.birthDate,
        form.value.gender,
        form.value.cnp,
        form.value.phoneNumber,
        this.getOrdNumber()
      )
    );
    console.log('edited');
  }
  delete() {
    console.log('deleted');
    this.dataService.deletePatient(this.index);
  }

  getOrdNumber() {
    return this.dataService.getAllPatients().length + 100;
  }
}
