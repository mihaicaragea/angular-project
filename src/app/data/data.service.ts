import { Injectable } from '@angular/core';
import { Patient } from './data.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  patients: Patient[] = [
 
  ];

  constructor() {}
  get(index: number) {
    return this.patients[index];
  }
  getAllPatients() {
    return this.patients;
  }
  addPatient(patient: Patient) {
    this.patients.push(patient);
  }
  updatePatient(index: number, updatedPatient: Patient) {
    this.patients[index] = updatedPatient;
  }
  deletePatient(index: number) {
    this.patients.splice(index, 1);
  }
}
