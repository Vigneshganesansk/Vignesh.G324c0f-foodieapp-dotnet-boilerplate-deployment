using Moq;
using Server.API.Entities;
using Server.API.Models;
using Server.API.Repository;
using Server.API.Services;
using System.Collections.Generic;
using Xunit;

namespace Server.Tests
{
    public class UnitTest1
    {
        private IEventService eventService;
        private Mock<IEventRepository> eventRepository;
        public UnitTest1()
        {
            eventRepository = new Mock<IEventRepository>();
            eventService = new EventService(eventRepository.Object);
            eventRepository.Setup(er => er.GetRestaurantSearchResult("Chennai")).Returns(getSearchResults());
            eventRepository.Setup(er => er.GetCityID("Chennai")).Returns(1);
            eventRepository.Setup(er => er.GetRestaurantLocSearchResult(1)).Returns(getRestaurantLocSearchResults());
            eventRepository.Setup(er => er.FetchComments(1, "Vignesh")).Returns(getComments());
            eventRepository.Setup(er => er.GetFavourites("Vignesh")).Returns(getFavourites());
            eventRepository.Setup(er => er.GetRestaurantDetails(123)).Returns(GetRestaurantRecord().Restaurant);
            eventRepository.Setup(er => er.FetchComments(1, "Vignesh")).Returns(getComments());
            eventRepository.Setup(er => er.RemoveFavourite(1, "Vignesh")).Returns(true);
        }
        [Fact]
        public void GetRestaurantSearchResults_EventService()
        {
            
            Assert.True(eventService.GetRestaurantSearchResults("Chennai").Count > 0);

        }
        [Fact]
        public void GetRestaurantLocSearchResults_EventServices()
        {
           
            Assert.True(eventService.GetRestaurantLocSearchResults("Chennai").Count > 0);
        }
        [Fact]
        public void GetComments_EventServices()
        {
            
            Assert.True(eventService.FetchComments(1,"Vignesh").Count > 0);
        }
        [Fact]
        public void GetFavouritesRes_EventServices()
        {
            
            Assert.Equal("TestRes", eventService.GetFavouritesRes("Vignesh")[0].Restaurant.Name);
        }
        [Fact]
        public void GetSelectedRes_EventServices()
        {
            
            Assert.True(eventService.FetchComments(1, "Vignesh").Count > 0);
        }
        [Fact]
        public void RemoveSelectedRes_EventServices()
        {

            Assert.True(eventService.FetchComments(1, "Vignesh").Count > 0);
        }
        [Fact]
        public void RemoveFav_Test()
        {
            
            Assert.True(eventService.RemoveFavourite(1, "Vignesh")==true);
        }
        private List<RestaurantRecord> getSearchResults()
        {
            List<RestaurantRecord> restaurantList = new List<RestaurantRecord>();
            restaurantList.Add(GetRestaurantRecord());
            return restaurantList;
        }
        private RestaurantRecord GetRestaurantRecord()
        {
            RestaurantRecord restaurantRecord = new RestaurantRecord();
            Restaurant restaurant = new Restaurant() { ID = 123, Name = "TestRes" };
            restaurantRecord.Restaurant = restaurant;
            return restaurantRecord;
        }
        private List<RestaurantRecord> getRestaurantLocSearchResults()
        {
            List<RestaurantRecord> restaurantRecordList = new List<RestaurantRecord>();
            RestaurantRecord restaurantRecord = new RestaurantRecord();
            restaurantRecordList.Add(restaurantRecord);
            return restaurantRecordList;
        }
        private List<Comments> getComments()
        {
            List<Comments> commentsModels = new List<Comments>();
            Comments commentsModel = new Comments();
            commentsModels.Add(commentsModel);
            return commentsModels;
        }
        private List<Favourite> getFavourites()
        {
            List<Favourite> favourites = new List<Favourite>();
            Favourite favourite = new Favourite() { Id = 1, RestaurantId = 123, UserId=1 };
            favourites.Add(favourite);
            return favourites;
        }
    }
}
