import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRentalComponent } from './car-rental.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CarRentalComponent
  }
];


@NgModule({
  declarations: [CarRentalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarRentalModule { }
