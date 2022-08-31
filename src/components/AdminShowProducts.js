import * as React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Modal } from '@mui/material'
import ProductContext from '../context/product-context';
import AdminNavbar from './AdminNavbar';
import EditProduct from './EditProducts';




const AdminShowProducts = () => {

  const productContext = React.useContext(ProductContext);

  const [open, setOpen] = React.useState(false);
  const [editItem, setEditItem] = React.useState('');
  const showModal = (item) => {
    setEditItem(item);
    setOpen(true);
  };
  const hideModal = () => setOpen(false);

  const deleteProducts = (item) => {
    console.log(item);
    productContext.deleteHandler(item.id);
  }

  React.useEffect(() => {
    hideModal();

  }, [productContext.productDetails])

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

      <AdminNavbar />
      <Typography variant="h3">Products Listed</Typography>
      <Box sx={{ marginTop: 5 }}>
        <Grid container spacing={1} >
          {productContext.productDetails.map((item) => (
            <Grid >
              <Card sx={{ width: 400, margin: 2.4,backgroundColor:"transparent" }}>
                <div>
                  <img src={item.image} style={{ height: "300px", widht: "300px" }}></img>
                </div>
                <CardContent>
                  <Typography variant="h4" >
                    {item.title}
                  </Typography>
                  {/* item.{property name } can be changed according to the api  */}
                  <Typography variant="h5" >
                    {item.price} /-
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary" varinat="outlined" onClick={() => deleteProducts(item)}>
                    Delete
                  </Button>
                  <Button size="small" color="primary" varinat="outlined" onClick={() => showModal(item)}>
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