using Server.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Repository
{
    public static class ZomatoInfo
    {
        const string url = "https://developers.zomato.com";

        public static RestaurantList GetRestaurants(string city)
        {
            string urlParameters = $"/api/v2.1/search?entity_type={city}";
            var response = APICall.RunAsync<RestaurantList>(url, urlParameters).GetAwaiter().GetResult();
            return response;
        }
        public static RestaurantList GetRestaurantSearchResult(string query)
        {
            string urlParameters = $"/api/v2.1/search?entity_type=city&q={query}";
            var response = APICall.RunAsync<RestaurantList>(url, urlParameters).GetAwaiter().GetResult();
            return response;
        }
        public static int GetCityID(string cityName)
        {
            string urlParameters = $"/api/v2.1/cities?q={cityName}";
            var response = APICall.RunAsync<CitiesSearch>(url, urlParameters).GetAwaiter().GetResult();
            return response.locationSuggestions[0].ID;
        }
        public static RestaurantList GetRestaurantLocSearchResult(int cityID)
        {
            string urlParameters = $"/api/v2.1/search?entity_id={cityID}&entity_type=city";
            var response = APICall.RunAsync<RestaurantList>(url, urlParameters).GetAwaiter().GetResult();
            return response;
        }
        public static Restaurant GetRestaurantDetails(int restaurantID)
        {
            string urlParameters = $"/api/v2.1/restaurant?res_id={restaurantID}";
            var response = APICall.RunAsync<Restaurant>(url, urlParameters).GetAwaiter().GetResult();
            return response;
        }
    }
}
