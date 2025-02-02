﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Server.API.Entities;

namespace Server.API.Migrations
{
    [DbContext(typeof(FoodieDbContext))]
    [Migration("20200526161250_AddedUserFKReference")]
    partial class AddedUserFKReference
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Server.API.Entities.Comments", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<int?>("RestaurantId")
                        .HasColumnName("RestaurantID");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Server.API.Entities.Favourite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("RestaurantId")
                        .HasColumnName("Restaurant_Id");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Favourite");
                });

            modelBuilder.Entity("Server.API.Entities.Test", b =>
                {
                    b.Property<int>("Id");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.ToTable("Test");
                });

            modelBuilder.Entity("Server.API.Entities.Userz", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Userz");
                });

            modelBuilder.Entity("Server.API.Entities.Comments", b =>
                {
                    b.HasOne("Server.API.Entities.Userz", "Userz")
                        .WithMany("Comments")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_Comments_User");
                });

            modelBuilder.Entity("Server.API.Entities.Favourite", b =>
                {
                    b.HasOne("Server.API.Entities.Userz", "Userz")
                        .WithMany("Favourite")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_Favourite_User");
                });
#pragma warning restore 612, 618
        }
    }
}
