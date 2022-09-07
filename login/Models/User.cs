
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace login.Models
{
    public class User : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
       

    }
}
