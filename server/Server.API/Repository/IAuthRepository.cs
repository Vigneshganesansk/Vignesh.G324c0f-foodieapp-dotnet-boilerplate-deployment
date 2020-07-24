using Server.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.API.Repository
{
    public interface IAuthRepository
    {
        Task<Userz> Register(Userz user, string password);
        Task<Userz> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
