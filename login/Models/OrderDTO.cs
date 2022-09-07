namespace login.Models
{
    public class OrderDTO
    {
        public class Detail
        {
            public int ProductId { get; set; }
            public string? Product { get; set; }
            public decimal Price { get; set; }
            public int Quantity { get; set; }
        }
        public IEnumerable<Detail>? Details { get; set; }
    }
}
