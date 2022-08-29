import * as React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Modal } from '@mui/material'
import ProductContext from '../context/product-context';
import AdminNavbar from './AdminNavbar';
import EditProduct from './EditProducts';




const AdminShowProducts = () => {

  const productContext = React.useContext(ProductContext);
  
  const [open, setOpen] = React.useState(false);
  const [editItem,setEditItem]=React.useState('');
  const showModal = (item) => {
    setEditItem(item);
    setOpen(true);
  };
  const hideModal = () => setOpen(false);

  const deleteProducts = (item) => {
    console.log(item);
    productContext.deleteHandler(item.id);
  }

  React.useEffect(()=>{
    hideModal();

  },[productContext.productDetails])

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {productContext.productDetails.map((item)=>{
            
          })}
          {productContext.productDetails.map((item) => (
            <Grid>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt="POC"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {item.productName}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                      {item.productPrice} /-
                    </Typography>
                  </CardContent>
                </CardActionArea>
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