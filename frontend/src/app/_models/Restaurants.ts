import { Locaton } from "./Location";
import { Rating } from "./Rating";

export class Restaurants {
    restaurant: Restaurant;
}
class Restaurant{
    id: number;
    name: string;
    location: Locaton;
    cuisines: string;
    average_cost_for_two: number;
    currency: string;
    is_favourite: boolean;
    user_rating: Rating;
    thumb: string;
}