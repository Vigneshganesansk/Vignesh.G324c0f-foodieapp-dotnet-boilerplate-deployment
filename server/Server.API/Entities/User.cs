using System;
using System.Collections.Generic;

namespace Server.API.Entities
{
    public partial class Userz
    {
        public Userz()
        {
            Comments = new HashSet<Comments>();
            Favourite = new HashSet<Favourite>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public ICollection<Comments> Comments { get; set; }
        public ICollection<Favourite> Favourite { get; set; }
    }
}
