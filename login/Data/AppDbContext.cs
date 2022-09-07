using login.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace login.Data
{
    public class AppDbContext : IdentityDbContext<User, Role, int>
    {
       

        public AppDbContext(DbContextOptions options) : base(options)
        {


        }

        public AppDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<User>()
               .HasOne(a => a.Address)
               .WithOne()
               .HasForeignKey<UserAddress>(a => a.Id)
               .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Role>()
                .HasData(
                    new Role { Id = 1, Name = "User", NormalizedName = "USER" },
                    new Role { Id = 2, Name = "Admin", NormalizedName = "ADMIN" }
                );


           
    }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public DbSet<Cart2> ShoppingCartItems { get; set; }
        

    }
}
