using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Models
{
    public class CitiesSearch
    {
        [JsonProperty("location_suggestions")]
        public LocationSuggestion[] locationSuggestions { get; set; }
        [JsonProperty("status")]
        public string status { get; set; }
        [JsonProperty("has_more")]
        public int has_more { get; set; }
        [JsonProperty("has_total")]
        public int has_total { get; set; }
        [JsonProperty("user_has_addresses")]
        public bool user_has_address { get; set; }
    }
}
