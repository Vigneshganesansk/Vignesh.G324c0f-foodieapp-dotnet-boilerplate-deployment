import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailComponent } from './restaurant-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertifyService } from '../_services/alertify.service';
import { AuthGuard } from '../_guards/auth.guard';
import { AuthService } from '../_services/auth.service';
import { AppService } from '../_services/app.service';
import { StorageService } from '../_services/storage.service';
import { of } from 'rxjs/observable/of';
import { Observable, Subject } from 'rxjs';
import { Restaurants } from '../_models/Restaurants';
class MockAppService extends AppService {
  restaurantObserver: Observable<Restaurants> = new Subject<Restaurants>().asObservable();

  constructor() {
    super();
  }

  setSelectedRestaurant(restaurant: Restaurants) {
    return Observable.of([{restaurant:{id:16610098,name:"The Old Mill Cafe",location:{address:"12 Pym St, Millthorpe",city:"Millthorpe",locality_verbose:"Millthorpe, Millthorpe"},cuisines:"Coffee and Tea, Modern Australian",average_cost_for_two:20,currency:"$",is_favourite:true,user_rating:{aggregate_rating:3.9,ratingText:"Good",votes:29}}}]);
  }
}
describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;
  let appService: AppService;
  let storageService: StorageService;
  let alertifyService: AlertifyService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
      providers: [AlertifyService, AuthService, {provide:AppService, useClass: MockAppService}, StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    appService = new MockAppService();
    component = new RestaurantDetailComponent(appService,storageService,alertifyService);
    fixture = TestBed.createComponent(RestaurantDetailComponent);
  });

  // it('Restaurant-Detail: should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
