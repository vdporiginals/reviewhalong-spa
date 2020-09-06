import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module')
      .then(m => m.BlogModule)
  },
  {
    path: 'car-rental',
    loadChildren: () => import('./pages/car-rental/car-rental.module')
      .then(m => m.CarRentalModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module')
      .then(m => m.FoodModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./pages/promotion/promotion.module')
      .then(m => m.PromotionModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module')
      .then(m => m.RoomsModule)
  },
  {
    path: 'homestay',
    loadChildren: () => import('./pages/homestay/homestay.module')
      .then(m => m.HomestayModule)
  },
  {
    path: 'tour',
    loadChildren: () => import('./pages/tour/tour.module')
      .then(m => m.TourModule)
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
