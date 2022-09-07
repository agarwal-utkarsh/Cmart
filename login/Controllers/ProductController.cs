using login.Data;
using login.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace login.Controllers
{

    [ApiController]
    [Route("controller")]

    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }
        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.ToListAsync();
        }



        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);



            if (product == null)
            {
                return NotFound();
            }



            return product;
        }



        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        
 [HttpPut("{id}")]

 public ActionResult PutProduct(int id, [FromBody] Product product)
        {

            var prod = _context.Products.FirstOrDefault(e => e.Id == id);

            if (prod == null) { return NotFound(); }
            else
            {
                prod.Name = product.Name; 
                prod.Description = product.Description; 
                prod.PictureUrl = product.PictureUrl; 
                prod.Price = product.Price;

                _context.SaveChanges();
            }                                                  
                return Ok("Product Updated");       
        }




            // POST: api/Products
            // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
            [HttpPost]
             public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            if (_context.Products == null)
            {
                return Problem("Entity set 'AppDbContext.Products'  is null.");
            }
            _context.Products.Add(product);
            await _context.SaveChangesAsync();



            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }



        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }



            _context.Products.Remove(product);
            await _context.SaveChangesAsync();



            return NoContent();
        }



        private bool ProductExists(int id)
        {
            return (_context.Products?.Any(e => e.Id == id)).GetValueOrDefault();
        }

    }
}
