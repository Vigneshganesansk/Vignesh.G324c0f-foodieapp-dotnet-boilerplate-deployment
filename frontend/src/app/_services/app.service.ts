import { Injectable } from "@angular/core";
import { Restaurants } from "../_models/Restaurants";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class AppService{
    // Observables for our components to subscribe to.
    restaurantObserver: Observable<Restaurants>;
    constructor(){
        this.restaurantObserver = this.selectedCard.asObservable();
    }
    private selectedCard = new BehaviorSubject<Restaurants>(new Restaurants()); 
    setSelectedRestaurant(restaurant: Restaurants)
    {
        this.selectedCard.next(restaurant);
    }
}