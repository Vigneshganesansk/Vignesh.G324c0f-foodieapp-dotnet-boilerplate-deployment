import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
    {path: '', component: HomeComponent, canActivate:[AuthGuard]},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path:'search', component: SearchComponent},
            {path: 'restaurant-detail', component: RestaurantDetailComponent},
            {path:'favourite', component: FavouritesComponent},
        ]
    },
    {path:'register', component: RegisterComponent}
]

export const appRoutingModule = RouterModule.forRoot(routes);