using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Server.API.Entities;
using System.Linq;

namespace ServerAPI.Entities
{
    public static class PrepDB
    {
        public static void PrepPopulation(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                SeedData(serviceScope.ServiceProvider.GetService<FoodieDbContext>());
            }
        }
        public static void SeedData(FoodieDbContext dbContext)
        {
            System.Console.WriteLine("Applying Migration");
            dbContext.Database.Migrate();
        }
    }
}