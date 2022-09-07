using System.ComponentModel.DataAnnotations;

namespace login.Models
{
    public class Cart2
    {
         [Key]
            public string ItemId { get; set; }

            public string CartId { get; set; }

            public int Quantity { get; set; }

            public System.DateTime DateCreated { get; set; }

            public int ProductId { get; set; }

            public  Product? Product { get; set; }

        
    }
}
