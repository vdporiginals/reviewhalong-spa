import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module')
            .then(m => m.HomeModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module')
            .then(m => m.BlogModule)
    },
    {
        path: 'car-rental',
        loadChildren: () => import('./car-rental/car-rental.module')
            .then(m => m.CarRentalModule)
    },
    {
        path: 'food',
        loadChildren: () => import('./food/food.module')
            .then(m => m.FoodModule)
    },
    {
        path: 'promotion',
        loadChildren: () => import('./promotion/promotion.module')
            .then(m => m.PromotionModule)
    },
    {
        path: 'rooms',
        loadChildren: () => import('./rooms/rooms.module')
            .then(m => m.RoomsModule)
    },
    {
        path: 'homestay',
        loadChildren: () => import('./homestay/homestay.module')
            .then(m => m.HomestayModule)
    },
    {
        path: 'tour',
        loadChildren: () => import('./tour/tour.module')
            .then(m => m.TourModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
