using Microsoft.Extensions.Configuration;
using Moq;
using Server.API.Controllers;
using Server.API.Entities;
using Server.API.Models;
using Server.API.Repository;
using Server.API.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
namespace Server.Tests
{
    public class AuthController_Test
    {
        private AuthController _authController;
        private Mock<IAuthRepository> _authRepository;
        private Mock<IConfiguration> _config;
        public AuthController_Test()
        {
            _authRepository = new Mock<IAuthRepository>();
            _config = new Mock<IConfiguration>();
            _authController = new AuthController(_authRepository.Object, _config.Object);
            _authRepository.Setup(bl => bl.UserExists(It.IsAny<String>())).Returns(Task.FromResult(true));
            _authRepository.Setup(bl => bl.Register(It.IsAny<Userz>(), It.IsAny<String>())).Returns(Task.FromResult(new Userz()));
        }

        [Fact]
        public void Register_Success()
        {
            var response = _authController.Register(new UserFOrRegister());
            Assert.True(response.IsCompleted);
        }

        [Fact]
        public void Login_Success()
        {
            var response = _authController.Register(new UserFOrRegister());
            Assert.True(response.IsCompleted);
        }

    }
}
