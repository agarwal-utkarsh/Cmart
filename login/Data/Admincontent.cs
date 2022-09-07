using login.Models;
using Microsoft.AspNetCore.Identity;

namespace login.Data
{
    public class Admincontent
    {
        public static async Task Initialize(AppDbContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@gmail.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] { "User", "Admin" });
            }
        }
    }
}

