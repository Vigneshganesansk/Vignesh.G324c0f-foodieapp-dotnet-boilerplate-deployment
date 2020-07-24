import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { SearchComponent } from './search/search.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { StorageService } from './_services/storage.service';
import { AppService } from './_services/app.service';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
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
];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        RouterModule.forRoot(routes),
        BrowserModule],
        providers: [StorageService,AppService,AuthService,AlertifyService,AuthGuard,{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));
  it('App component: Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
