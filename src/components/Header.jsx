import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const nav = useNavigate();
    const {pathname} = useLocation();

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{
            display: "flex",
            justifyContent: "center",
            gap: "45px",
        }}
        >
            <Button 
            color="inherit" 
            onClick={() => {nav("products")}}
            sx={{
               backgroundColor: pathname == "/products" ? "#6e9cca" : ""
            }}
            >Products
            </Button>

            <Button 
            color="inherit" 
            onClick={() => {nav("carts")}}
            sx={{
                backgroundColor: pathname == "/carts" ? "#6e9cca" : ""
             }}
             >Carts
             </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
