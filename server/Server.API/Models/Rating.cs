using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Models
{
    public class Rating
    {
        [JsonProperty("aggregate_rating")]
        public decimal aggregateRating { get; set; }

        [JsonProperty("rating_text")]
        public string ratingText { get; set; }

        [JsonProperty("votes")]
        public int votes { get; set; }
    }
}
