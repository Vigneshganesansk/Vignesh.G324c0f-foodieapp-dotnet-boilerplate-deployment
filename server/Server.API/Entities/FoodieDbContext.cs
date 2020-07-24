using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Server.API.Entities
{
    public partial class FoodieDbContext : DbContext
    {

        public FoodieDbContext(DbContextOptions<FoodieDbContext> options)
            : base(options)
        {
        }
        public  DbSet<Userz> Userz { get; set; }
        public  DbSet<Comments> Comments { get; set; }
        public  DbSet<Favourite> Favourite { get; set; }
        public  DbSet<Test> Test { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comments>(entity =>
            {
                entity.Property(e => e.RestaurantId).HasColumnName("RestaurantID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Comments_User");
            });

            modelBuilder.Entity<Favourite>(entity =>
            {
                entity.Property(e => e.RestaurantId).HasColumnName("Restaurant_Id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Favourite)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Favourite_User");
            });

            modelBuilder.Entity<Test>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();
            });
        }
    }
}
