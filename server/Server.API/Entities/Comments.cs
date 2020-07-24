using System;
using System.Collections.Generic;

namespace Server.API.Entities
{
    public partial class Comments
    {
        public int Id { get; set; }
        public int? RestaurantId { get; set; }
        public string Description { get; set; }
        public int? UserId { get; set; }

        public Userz User { get; set; }
    }
}
