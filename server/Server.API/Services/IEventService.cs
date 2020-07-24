using Server.API.Entities;
using Server.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Services
{
    public interface IEventService
    {
        List<Test> GetTestData();
        List<RestaurantRecord> GetRestaurantSearchResults(string searchQuery);
        List<RestaurantRecord> GetRestaurantLocSearchResults(string searchQuery);
        bool PostComments(int restaurantID, string userName, List<CommentsModel> comments);
        List<CommentsModel> FetchComments(int restaurantID, string userName);
        List<RestaurantRecord> IsFavouriteCheck(List<RestaurantRecord> restaurants, string userName);
        bool SetFavourite(int restaurantID, string userName);
        bool RemoveFavourite(int restaurantID, string userName);
        List<RestaurantRecord> GetFavouritesRes(string userName);
    }
}
