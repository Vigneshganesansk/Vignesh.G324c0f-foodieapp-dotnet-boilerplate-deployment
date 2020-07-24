import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Restaurants } from '../_models/Restaurants';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(
    private storageService : StorageService
  ) { }
  favouriteRestaurants: Restaurants[];

  ngOnInit() {
    this.storageService.getFavourites(this.storageService.userName).subscribe(restaurants => {
      this.favouriteRestaurants = restaurants;
    })
  }
  removeFavourite(index: number)
  {

    this.favouriteRestaurants[index].restaurant.is_favourite = false;
    this.storageService.removeFavourites(this.favouriteRestaurants[index].restaurant.id, this.storageService.userName).subscribe(response => {
      if(response)
      {
        console.log("Removed as favourite");
      }
    });
    this.favouriteRestaurants.splice(index,1);
  }

}
