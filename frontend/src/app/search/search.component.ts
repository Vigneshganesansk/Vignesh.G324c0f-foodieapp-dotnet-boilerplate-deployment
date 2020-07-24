import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Restaurants } from '../_models/Restaurants';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private storageService: StorageService, 
              private appService: AppService          
    ) { }
  location: string;
  cuisine: string;
  searchRestaurants: Restaurants[];
  ngOnInit() {
  }
  selectedCard(index: number){
    this.appService.setSelectedRestaurant(this.searchRestaurants[index]);
  }
  searchFunc(){
    if(this.cuisine){
      this.storageService.getRestaurantsSearch(this.cuisine, this.storageService.userName).subscribe(response => {
        this.searchRestaurants = response;
      });
    }
    else if(this.location){
      this.storageService.getRestaurantsLocSearch(this.location).subscribe(response=>{
        this.searchRestaurants = response;
      })
    }
  }
  setFavourite(index: number)
  {
    this.searchRestaurants[index].restaurant.is_favourite = true;
    this.storageService.setFavourites(this.searchRestaurants[index].restaurant.id, this.storageService.userName).subscribe(response => {
      if(response)
      {
        console.log("Added as favourite");
      }
    });
  }
  removeFavourite(index: number)
  {
    this.searchRestaurants[index].restaurant.is_favourite = false;
    this.storageService.removeFavourites(this.searchRestaurants[index].restaurant.id, this.storageService.userName).subscribe(response => {
      if(response)
      {
        console.log("Removed as favourite");
      }
    });
  }

}
