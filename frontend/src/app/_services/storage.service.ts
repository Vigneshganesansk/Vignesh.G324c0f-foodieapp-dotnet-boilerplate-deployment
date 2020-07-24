import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Restaurants } from "../_models/Restaurants";
import { Comments } from "../_models/Comments";
import { environment } from '../../environments/environment';
import { headersToString } from "selenium-webdriver/http";

// const httpOptions = {

// };
@Injectable()
export class StorageService {
    constructor ( private http: HttpClient) {}
    getRestaurantsURL: string = environment.getRestaurantsURL;
    getRestaurantsSearchURL: string = environment.getRestaurantsSearchURL;
    userName: string = "";
    getHeaders()
    {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer"+" "+sessionStorage.getItem('token')
            })
        }
        return httpOptions;
    }
    getRestaurants(city: string, userName: string): Observable<Restaurants[]>{
       return this.http.get<Restaurants[]>(`${this.getRestaurantsURL}/${city}/${userName}`, this.getHeaders());
    }
    getRestaurantsSearch(searchQuery: string, userName: string): Observable<Restaurants[]>{
        return this.http.get<Restaurants[]>(`${this.getRestaurantsSearchURL}/searchRestaurant/${searchQuery}/${userName}`,this.getHeaders());
    }
    getRestaurantsLocSearch(searchQuery: string): Observable<Restaurants[]>{
        return this.http.get<Restaurants[]>(`${this.getRestaurantsSearchURL}/searchRestaurantLoc/${searchQuery}`,this.getHeaders());
    }
    fetchCommentsFor(restaurantID: number, userName: string): Observable<Comments[]>
    {
        return this.http.get<Comments[]>(`${this.getRestaurantsSearchURL}/getComments/${restaurantID}/${userName}`,this.getHeaders());
    }
    postComments(restaurantID:number, userName: string, comments: Comments[]): Observable<boolean>
    {
        // return this.http.post<boolean>(`${this.getRestaurantsSearchURL}/postComments/${restaurantID}`,comments);
        return this.http.post<boolean>(`${this.getRestaurantsSearchURL}/postComments/${restaurantID}/${userName}`,comments, this.getHeaders());
    }
    getFavourites(userName: string): Observable<Restaurants[]>
    {
        return this.http.get<Restaurants[]>(`${this.getRestaurantsSearchURL}/getFavourites/${userName}`,this.getHeaders());
    }
    setFavourites(restaurantID: number, userName: string): Observable<boolean>
    {
        return this.http.get<boolean>(`${this.getRestaurantsSearchURL}/setFavourite/${restaurantID}/${userName}`,this.getHeaders())
    }
    removeFavourites(restaurantID: number, userName: string): Observable<boolean>
    {
        return this.http.get<boolean>(`${this.getRestaurantsSearchURL}/removeFavourite/${restaurantID}/${userName}`,this.getHeaders())
    }

}