import * as React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, CardActions, Modal, MenuItem, TextField } from '@mui/material'
import ProductContext from '../context/product-context';
import AdminNavbar from './AdminNavbar';
import EditProduct from './EditProducts';




const AdminShowProducts = () => {

  const productContext = React.useContext(ProductContext);

  const [open, setOpen] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [editItem, setEditItem] = React.useState('');
  const [showCategory, setShowCategory] = React.useState("allProducts");
  const showModal = (item) => {
    setEditItem(item);
    setOpen(true);
  };
  const hideModal = () => setOpen(false);

  const deleteProducts = (item) => {
    console.log(item.id);
    productContext.deleteHandler(item.id);
  }

  const filterProductsChange = (e) => {

    setShowCategory(e.target.value);


  }

  React.useEffect(() => {
    setFilteredProducts(productContext.productDetails)


  }, [])

  React.useEffect(() => {
    hideModal();

  }, [productContext.productDetails])

  React.useEffect(() => {
    if (showCategory === "allProducts") {
      setFilteredProducts(productContext.productDetails)
    }
    else {
      setFilteredProducts(productContext.productDetails.filter(ele => ele.description === showCategory))
    }
  }, [showCategory, productContext.productDetails])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>

      
      {localStorage.getItem("token") && <AdminNavbar /> }
      <Typography variant="h3">Products Listed</Typography>
      <TextField required label="Category" sx={{ marginBottom: "8px", width: "50%" }} select onChange={filterProductsChange} value={showCategory} >

        <MenuItem value="allProducts">All Products</MenuItem>
        <MenuItem value="electronics" >Electronics</MenuItem>
        <MenuItem value="medicines" >Medicines</MenuItem>
        <MenuItem value="grocery" >Grocery</MenuItem>

      </TextField>
      <Box sx={{ marginTop: 5 }}>
        <Grid container spacing={1} >
          {filteredProducts.map((item) => (
            <Grid key={item.id} >
              <Card sx={{ width: 400, margin: 2.4, backgroundColor: "transparent" }}  >
                <div>
                  <img src={item.pictureUrl} style={{ height: "300px", widht: "300px" }}></img>
                </div>
                <CardContent>
                  <Typography variant="h4" >
                    {item.name}
                  </Typography>
                  {/* item.{property name } can be changed according to the api  */}
                  <Typography variant="h5" >
                    {item.price} /-
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button sx={{
                    border: "none", color: "white", bgcolor: "red", ":hover": {
                      color: "white",
                      bgcolor: "#fc4242",
                      border: "none"
                    }
                  }} size="small" color="primary" varinat="outlined" onClick={() => deleteProducts(item)}>
                    Delete
                  </Button>
                  <Button sx={{
                    border: "none", color: "white", bgcolor: "#0257c7", ":hover": {
                      color: "white",
                      bgcolor: "#2f86fa",
                      border: "none"
                    }
                  }} size="small" color="primary" varinat="outlined" onClick={() => showModal(item)}>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={hideModal}
      >
        <Box sx={style}>
          <EditProduct item={editItem} />
          <Button variant='outlined' onClick={hideModal} >Close</Button>
        </Box>
      </Modal>

    </>
  )
}

export default AdminShowProducts