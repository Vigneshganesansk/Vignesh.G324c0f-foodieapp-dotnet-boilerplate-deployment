using Server.API.Entities;
using Server.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Repository
{
    public interface IEventRepository
    {
        List<Test> GetTestData();
        List<RestaurantRecord> GetRestaurantSearchResult(string searchQuery);
        int GetCityID(string searchQuery);
        List<RestaurantRecord> GetRestaurantLocSearchResult(int cityID);
        bool PostComments(List<Comments> comments);
        List<Comments> FetchComments(int restaurantID, string userName);
        List<Favourite> GetFavourites(string userName);
        bool SetFavourite(Favourite favourite);
        bool RemoveFavourite(int restaurantID, string userName);
        Restaurant GetRestaurantDetails(int id);
        int GetUserId(string userName);
    }
}
