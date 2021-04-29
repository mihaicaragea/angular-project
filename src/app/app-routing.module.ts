import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent,
    children: [
      {
        path: 'add-patient',
        component: AddPatientComponent,
      },
      { path: ':id', component: AddPatientComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
