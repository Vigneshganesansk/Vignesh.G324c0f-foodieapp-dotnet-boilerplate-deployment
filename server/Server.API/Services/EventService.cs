using Server.API.Entities;
using Server.API.Mapper;
using Server.API.Models;
using Server.API.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Services
{
    public class EventService: IEventService
    {
        private readonly IEventRepository eventRepository;
        private readonly EventMapper eventMapper;
        public EventService(IEventRepository _eventRepository)
        {
            eventRepository = _eventRepository;
            eventMapper = new EventMapper(eventRepository);
        }
        public List<Test> GetTestData()
        {
            return eventRepository.GetTestData();
        }
        public List<RestaurantRecord> GetRestaurantSearchResults(string searchQuery)
        {
            return eventRepository.GetRestaurantSearchResult(searchQuery);
        }
        public List<RestaurantRecord> GetRestaurantLocSearchResults(string searchQuery)
        {
            int cityID = eventRepository.GetCityID(searchQuery);
            return eventRepository.GetRestaurantLocSearchResult(cityID);
        }
        public bool PostComments(int restaurantID, string userName, List<CommentsModel> comments)
        {
            
            return eventRepository.PostComments(eventMapper.MapCommentModeltoCommentEntity(restaurantID,comments));
        }
        public List<CommentsModel> FetchComments(int restaurantID, string userName)
        {
            List<Comments> comments = eventRepository.FetchComments(restaurantID,userName);
            return eventMapper.MapCommentEntityToCommentModel(comments);
        }
        public List<RestaurantRecord> IsFavouriteCheck(List<RestaurantRecord> restaurants, string userName)
        {
            List<Favourite> favourites = eventRepository.GetFavourites(userName);
            List<RestaurantRecord> res = (
                                          from r in restaurants
                                          join f in favourites
                                          on r.Restaurant.ID equals f.RestaurantId
                                          select r
                                         ).ToList();
            foreach(RestaurantRecord restaurant in res)
            {
                restaurant.Restaurant.is_favourite = true;
            }
            return restaurants;
        }
        public bool SetFavourite(int restaurantID, string userName)
        {
            Favourite favourite = new Favourite();
            favourite.RestaurantId = restaurantID;
            favourite.UserId = eventRepository.GetUserId(userName);
            return eventRepository.SetFavourite(favourite);
        }
        public bool RemoveFavourite(int restaurantID, string userName)
        {
            return eventRepository.RemoveFavourite(restaurantID, userName);
        }
        public List<RestaurantRecord> GetFavouritesRes(string userName)
        {
            List<Favourite> favourites = eventRepository.GetFavourites(userName);
            List<RestaurantRecord> favouriteRestaurants = new List<RestaurantRecord>();
            foreach(Favourite fav in favourites)
            {
                Restaurant restaurant = eventRepository.GetRestaurantDetails((int)fav.RestaurantId);
                RestaurantRecord restaurantRecord = new RestaurantRecord();
                restaurantRecord.Restaurant = restaurant;
                favouriteRestaurants.Add(restaurantRecord);
            }
            return favouriteRestaurants;
        }
    }
}
