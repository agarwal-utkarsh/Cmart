using login.Data;
using login.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace login.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class Cart2Controller : ControllerBase
    {
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly AppDbContext context;

        public string ShoppingCartId { get; set; }
        public const string CartSessionKey = "CartId";
        public Cart2Controller(AppDbContext context, IHttpContextAccessor _contextAccessor)
        {
            this.context = context;
            this._contextAccessor = _contextAccessor;
        }
        
        [HttpPost]
        [Route("AddtoCart/{id}")]
        [Authorize]
        public async Task<ActionResult> AddToCart(int id)
        {

            // Retrieve the product from the database.           
            ShoppingCartId = GetCartId();

            var cartItem = context.ShoppingCartItems.SingleOrDefault(
                c => c.CartId == ShoppingCartId
                && c.ProductId == id);
            if (cartItem == null)
            {
                // Create a new cart item if no cart item exists.                 
                cartItem = new Cart2
                {
                    ItemId = Guid.NewGuid().ToString(),
                    ProductId = id,
                    CartId = ShoppingCartId,
                    Product = context.Products.SingleOrDefault(

                    p => p.Id == id),
                    Quantity=1,
                    DateCreated = DateTime.Now
                };

                context.ShoppingCartItems.Add(cartItem);
            }
            else
            {
                // If the item does exist in the cart,                  
                // then add one to the quantity.                 
                cartItem.Quantity++;
            }
            context.SaveChanges();
            return StatusCode(201);
        }
        [HttpGet]
        [Route("GetCartItems")]
        [Authorize]
        public IEnumerable<Cart2>GetCartItems()
        {

            ShoppingCartId = GetCartId();

            return context.ShoppingCartItems.Where(
                   c => c.CartId == ShoppingCartId).Select(c =>
                new Cart2()
                {  
                   ItemId = c.ItemId,
                  ProductId = c.ProductId,
                   CartId = c.CartId,
                   Quantity = c.Quantity,
                   DateCreated=c.DateCreated,
                   Product = c.Product


                }) ;

        }
        [HttpGet]
        [Route("GetTotalAmount")]
        public decimal GetTotal()
        {
            ShoppingCartId = GetCartId();
            // Multiply product price by quantity of that product to get        
            // the current price for each of those products in the cart.  
            // Sum all product price totals to get the cart total.   
            decimal? total = decimal.Zero;
            total = (decimal?)(from cartItems in context.ShoppingCartItems
                               where cartItems.CartId == ShoppingCartId
                               select (int?)cartItems.Quantity *
                               cartItems.Product.Price).Sum();
            return total ?? decimal.Zero;
        }
        [HttpDelete]
        [Route("RemoveItemsFromCart")]
        [Authorize]
        public void RemoveItem(string removeCartID, int removeProductID)
        {

            try
            {
                var myItem = (from c in context.ShoppingCartItems where 
                              c.CartId == removeCartID && c.Product.Id == removeProductID select c)
                              .FirstOrDefault();
                if (myItem != null)
                {
                    // Remove Item.
                    context.ShoppingCartItems.Remove(myItem);
                    context.SaveChanges();
                }
            }
            catch (Exception exp)
            {
                throw new Exception("ERROR: Unable to Remove Cart Item - " + exp.Message.ToString(), exp);
            }
           
        }
        [HttpPut]
        [Route("UpdateCartItems")]
        [Authorize]
        public void UpdateItem(string updateCartID, int updateProductID, int quantity)
        {
           
                try
                {
                    var myItem = (from c in context.ShoppingCartItems where c.CartId == updateCartID && c.Product.Id== updateProductID select c).FirstOrDefault();
                    if (myItem != null)
                    {
                        myItem.Quantity = quantity;
                        context.SaveChanges();
                    }
                }
                catch (Exception exp)
                {
                    throw new Exception("ERROR: Unable to Update Cart Item - " + exp.Message.ToString(), exp);
                }
            
        }
        [HttpDelete]
        [Route("DeleteCartItems")]
        public void EmptyCart()
        {
            ShoppingCartId = GetCartId();
            var cartItems = context.ShoppingCartItems.Where(
                c => c.CartId == ShoppingCartId);
            foreach (var cartItem in cartItems)
            {
                context.ShoppingCartItems.Remove(cartItem);
            }
            // Save changes.             
            context.SaveChanges();
        }

        private string GetCartId()
        {
            var id = User.Identity?.Name;
            return id;

        }

    }
}