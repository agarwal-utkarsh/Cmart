using login.Data;
using login.Models;
using login.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace login.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly Microsoft.AspNetCore.Identity.UserManager<User> userManager;
        private readonly TokenService tokenService;
        private readonly AppDbContext context;

        public AuthController(Microsoft.AspNetCore.Identity.UserManager<User> userManager ,TokenService tokenService,AppDbContext context)
        {
            this.userManager = userManager;
            this.tokenService = tokenService;
            this.context = context;
        }
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            var user = await userManager.FindByNameAsync(loginDTO.Username);
            if (user == null || !await userManager.CheckPasswordAsync(user, loginDTO.Password)) 
            return Unauthorized();
          
            return new UserDTO
            {
                Email = user.Email,
                token = await tokenService.GenerateToken(user),
               
            };
        }
        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult> Register(RegisterDTO registerDTO)
        {
            var user = new User { UserName=registerDTO.Username, Email=registerDTO.Email};
            var result = await userManager.CreateAsync(user,registerDTO.Password);
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                 }
                return ValidationProblem();
            }
            await userManager.AddToRoleAsync(user, "USER");
            return StatusCode(201);
        }
        
        [Authorize]
        [HttpGet]
        [Route("Currentuser")]
        public async Task<ActionResult<UserDTO>> GetCurrentUserId()
        {   
            var user = await userManager.FindByNameAsync(User.Identity?.Name);
            return new UserDTO
            {
                Email = user.Email,
                token = await tokenService.GenerateToken(user)
            };
            //string userName = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            //return userName;
        }

        [Authorize]
        [HttpGet("Address")]
        public async Task<ActionResult<UserAddress?>> GetSavedAddress()
        {
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return await userManager.Users
                .Where(x => x.UserName == id)
                .Select(user => user.Address)
                .FirstOrDefaultAsync();
        }


    }

}

