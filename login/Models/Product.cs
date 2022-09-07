using System.ComponentModel.DataAnnotations;

namespace login.Models
{
    public class Product
    {
        
        
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public decimal Price { get; set; }
     // public ICollection<Product>? Products{ get; set; }
    }
}
