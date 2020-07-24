using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Server.API.Models;
using Server.API.Repository;
using Server.API.Services;

namespace Server.API.Controllers
{
    [EnableCors("AllowAll")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IEventService eventService;
        public ValuesController(IEventService _eventService)
        {
            eventService = _eventService;
        }
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "Foodie API";
        }
        // GET api/values
        [HttpGet]
        [Route("{city}/{userName}")]
        public ActionResult<List<RestaurantRecord>> Get(string city, string userName)
        {
            var response = ZomatoInfo.GetRestaurants(city);
            List<RestaurantRecord> restaurants = response.Restaurants.ToList();
            eventService.IsFavouriteCheck(restaurants, userName);
            return restaurants;
        }
        [HttpGet]
        [Route("docker")]
        public ActionResult<string> GetString()
        {
            return "Docker works";
        }
    }
}
