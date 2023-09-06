import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PropTypes } from 'prop-types';
import { Typography } from '@mui/material';

Cart.propTypes = {
    cart: PropTypes.object,
}

function Cart({ cart }) {
    const totalProducts = () => cart.products.reduce((sum, curr) => sum + curr.quantity, 0);
  return (
<Grid item container spacing={2} sx={{backgroundColor: "#ccc6", padding: "10px"}}>
  <Grid item xs={7} align="left"><Typography variant="h4" component="h4">{new Date(cart.date).toLocaleDateString()}</Typography></Grid>
  <Grid item xs={3} align="right"><Typography variant="h4" component="h4">Total</Typography></Grid>
  <Grid item xs={2} align="right"><Typography variant="h4" component="h4">{totalProducts()}</Typography></Grid>
  <Grid item xs={12}>
    <BasicTable cart={cart}/>
  </Grid>
</Grid>
  )
}

function BasicTable({cart}) {
    return(
    <TableContainer component={Paper} sx={{backgroundColor: "#ccc6"}}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow sx={{ 
            "td, th": { borderColor: "#999999", }}}>
          <TableCell>ID</TableCell>
          <TableCell align="right">Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.products.map((product) => (
          <TableRow  
          key={product.productId}
          sx={{ 
            "td, th": { borderColor: "#999999" },
            "&:last-child td, &:last-child th": { border: 0 },
           }}>
          <TableCell component="th" scope="row">
            {product.productId}
          </TableCell>
          <TableCell align="right" component="th" scope="row">
            {product.quantity}
          </TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
      )
}

BasicTable.propTypes = {
    cart: PropTypes.object,
}

export default Cart;