import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomestayComponent } from './homestay.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomestayComponent
  }
];


@NgModule({
  declarations: [HomestayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomestayModule { }
