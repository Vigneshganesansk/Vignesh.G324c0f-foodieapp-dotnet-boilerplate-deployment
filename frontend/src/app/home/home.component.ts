import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Restaurants } from '../_models/Restaurants';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private appService: AppService
    ) { }
  restaurants: Restaurants[];
  ngOnInit() {
    if(sessionStorage.length > 0){
    this.storageService.getRestaurants("Hyderabad", this.storageService.userName).subscribe(response => {
      this.restaurants = response;
      console.log("Restaurants", this.restaurants.map(x=>x.restaurant.thumb));
    });
  }
}
  selectedCard(index: number){
    this.appService.setSelectedRestaurant(this.restaurants[index]);
  }
  setFavourite(index: number)
  {
    this.restaurants[index].restaurant.is_favourite = true;
    this.storageService.setFavourites(this.restaurants[index].restaurant.id, this.storageService.userName).subscribe(response => {
      if(response)
      {
        console.log("Added as favourite");
      }
    });
  }
  removeFavourite(index: number)
  {
    this.restaurants[index].restaurant.is_favourite = false;
    this.storageService.removeFavourites(this.restaurants[index].restaurant.id, this.storageService.userName).subscribe(response => {
      if(response)
      {
        console.log("Removed as favourite");
      }
    });
  }
}
