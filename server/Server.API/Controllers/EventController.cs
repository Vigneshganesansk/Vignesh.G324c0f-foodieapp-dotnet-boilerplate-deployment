using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.API.Entities;
using Server.API.Models;
using Server.API.Services;

namespace Server.API.Controllers
{
    [EnableCors("AllowAll")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService eventService;
        public EventController(IEventService _eventService)
        {
            eventService = _eventService;
        }
        [HttpGet]
        public ActionResult<List<Test>> Get()
        {
            return eventService.GetTestData();
        }
        [HttpGet]
        [Route("searchRestaurant/{searchQuery}/{userName}")]
        public ActionResult<List<RestaurantRecord>> GetSearchResults(string searchQuery, string userName)
        {
            var response = eventService.GetRestaurantSearchResults(searchQuery);
            List<RestaurantRecord> restaurants = response.ToList();
            eventService.IsFavouriteCheck(restaurants, userName);
            return restaurants;
        }
        [HttpGet]
        [Route("searchRestaurantLoc/{searchQuery}")]
        public ActionResult<List<RestaurantRecord>> GetRestaurantLocResult(string searchQuery)
        {
            return eventService.GetRestaurantLocSearchResults(searchQuery);
        }
        [HttpPost]
        public void TestPost()
        {

        }
        [HttpPost]
        [Route("postComments/{restaurantID}/{userName}")]
        public ActionResult<bool> PostComments(int restaurantID,string userName, [FromBody] List<CommentsModel> comments)
        {
            return eventService.PostComments(restaurantID,userName, comments);
        }
        [HttpGet]
        [Route("getComments/{restaurantID}/{userName}")]
        public ActionResult<List<CommentsModel>> FetchComments(int restaurantID, string userName)
        {
            return eventService.FetchComments(restaurantID,userName);
        }
        [HttpGet]
        [Route("setFavourite/{restaurantID}/{userName}")]
        public ActionResult<bool> SetFavourite(int restaurantID, string userName)
        {
            return eventService.SetFavourite(restaurantID, userName);
        }
        [HttpGet]
        [Route("removeFavourite/{restaurantID}/{userName}")]
        public ActionResult<bool> RemoveFavourite(int restaurantID, string userName)
        {
            return eventService.RemoveFavourite(restaurantID, userName);
        }
        [HttpGet]
        [Route("getFavourites/{userName}")]
        public ActionResult<List<RestaurantRecord>> GetFavourites(string userName)
        {
            return eventService.GetFavouritesRes(userName);
        }
    }
}