import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app-routing.module';
import { StorageService } from './_services/storage.service';
import { SearchComponent } from './search/search.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AppService } from './_services/app.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { environment } from '../environments/environment';
import { HttpConfigInterceptor } from './_interceptors/httpconfig.interceptor';
import { HttpRequestInterceptor } from './_interceptors/normal.interceptor';

// export function tokenGetter(){
//   return sessionStorage.getItem('token');
// }
export const isE2E = environment.e2e;
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SearchComponent,
    RestaurantDetailComponent,
    FavouritesComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    appRoutingModule,
    BrowserModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ['localhost:6068','localhost:8083'],
    //     blacklistedRoutes: ['localhost:6068/api/auth','localhost:8083/api/auth']
    //   }
    // })
  ],
  providers: [StorageService,AppService,AuthService,AlertifyService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: isE2E ? HttpConfigInterceptor : HttpRequestInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
