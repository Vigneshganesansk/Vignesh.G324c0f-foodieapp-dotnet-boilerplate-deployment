using Microsoft.EntityFrameworkCore;
using Server.API.Entities;
using Server.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Repository
{
    public class EventRepository: IEventRepository
    {
        private readonly FoodieDbContext dbContext;
        public EventRepository(FoodieDbContext context)
        {
            dbContext = context;
        }
        public List<Test> GetTestData()
        {
            return dbContext.Test.ToList();
        }
        public Restaurant GetRestaurantDetails(int id) => ZomatoInfo.GetRestaurantDetails(id);
        public List<RestaurantRecord> GetRestaurantSearchResult(string searchQuery) => ZomatoInfo.GetRestaurantSearchResult(searchQuery).Restaurants.ToList();
        public int GetCityID(string searchQuery) => ZomatoInfo.GetCityID(searchQuery);
        public List<RestaurantRecord> GetRestaurantLocSearchResult(int cityID) => ZomatoInfo.GetRestaurantLocSearchResult(cityID).Restaurants.ToList();
        public bool PostComments(List<Comments> comments)
        {
            var all = from c in dbContext.Comments select c;
            dbContext.Comments.RemoveRange(all);
            if(comments.First().Description != String.Empty)
            dbContext.Comments.AddRange(comments);
            if(dbContext.SaveChanges()>0)
            return true;
            return false;
        }
        public List<Comments> FetchComments(int restaurantID, string userName)
        {
            int userId = GetUserId(userName);
            return dbContext.Comments.Include(x=>x.User).ToList().Where(x=>x.RestaurantId == restaurantID).ToList();
        }

        public int GetUserId(string userName)
        {
            return dbContext.Userz.FirstOrDefault(x => x.Username == userName).Id;
        }

        public List<Favourite> GetFavourites(string userName)
        {
            int userId = GetUserId(userName);
            var result = (
                from fav in dbContext.Favourite
                where fav.UserId == userId
                select fav
                ).ToList();
            return result;
        }
        public bool SetFavourite(Favourite favourite)
        {
            dbContext.Favourite.Add(favourite);
            if(dbContext.SaveChanges()>0)
            {
                return true;
            }
            return false;
        }
        public bool RemoveFavourite(int restaurantID, string userName)
        {
            int userId = GetUserId(userName);
            dbContext.RemoveRange(dbContext.Favourite.Where(x => x.RestaurantId == restaurantID && x.UserId == userId));
            if (dbContext.SaveChanges() > 0)
            {
                return true;
            }
            return false;
        }
    }
}
