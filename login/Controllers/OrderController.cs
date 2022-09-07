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
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _context;


        public OrderController(AppDbContext context)
        {
            _context = context;
        }
        [Authorize]
        [HttpGet]
        
public IEnumerable<Order> GetOrders()
        {
            return _context.Orders.Where(o => o.Customer == User.Identity.Name).
                Select(o => new Order() { Id = o.Id, Customer = o.Customer, OrderDetails = o.OrderDetails.
                Select(d => new OrderDetail() { OrderId = d.OrderId, ProductId = d.ProductId, Product = d.Product ,Quantity=d.Quantity ,Id=d.Id}).ToList() 
                }

 );
        }


        [HttpGet]
        [Route("GetOrders/{id}")]
        public OrderDTO GetOrder(int id)
        {   
        Order order = _context.Orders.Include("OrderDetails.Product")
                                    .First(o => o.Id == id && o.Customer == User.Identity.Name);
            if (order == null)
            {
                return null;
            }
            return new OrderDTO()
            {
                Details = from d in order.OrderDetails
                          select new OrderDTO.Detail()
                          {
                              ProductId = d.Product.Id,
                              Product = d.Product.Name,
                              Price = d.Product.Price,
                              Quantity = d.Quantity


                          }
            };



        }
        [HttpPost]
        public ActionResult PostOrder(OrderDTO dto)
        {
            if (ModelState.IsValid)
            {
                var order = new Order()
                {
                    Customer = User.Identity.Name,
                    OrderDetails = (from item in dto.Details
                                    select new OrderDetail()
                                    { ProductId = item.ProductId, Quantity = item.Quantity }).ToList()
                };



                _context.Orders.Add(order);
                _context.SaveChanges();



                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        //private bool OrderExists(int id)
        //{
        //    return (_context.Orders?.Any(e => e.Id == id)).GetValueOrDefault();
        //}



    }
}