import { Component, OnInit } from '@angular/core';
import { Patient } from '../data/data.models';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: Patient[]=[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.patients = this.dataService.getAllPatients();
  }
  delete(index:number){
    alert("Are you sure?")
    this.dataService.deletePatient(index);
  }
}
