using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace login.Models
{
    public class Order
    {
        public int Id { get; set; }
        [Required]
        public string? Customer { get; set; }



        // Navigation property
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
