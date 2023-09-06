import { Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useQuery } from "react-query";
import Service from "../Service";
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";


export default function AllProducts() {
  const { isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => Service.getProducts(),
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(event.target.value);
    setCurrentPage(1);
  };


  if (isLoading) {
    return (
      <>
      <div style={{ alignItems: 'center',  display: 'flex', flexDirection: "column" }}>
      <Typography variant="h4" component="h4" sx={{fontWeight: "bold", marginBottom: "25px"}}>
        Products
      </Typography>
      <Typography variant="h6" component="h6" sx={{fontWeight: "bold", marginBottom: "25px"}}>
        All products at your fingertips with a 25% OFF.<br></br>
        Score limited-stock faves at low prices.
      </Typography>
      <br></br>
      
        <Grid container spacing={2} style={{alignItems: "center" , paddingLeft: "100px"}}>
          {Array.from({ length: 9 }).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
             <Typography variant="h6" component="h6">
              <ProductCardSkeleton />
             </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      </>
    );
  }


  if (isError) {
    return <div><Typography variant="h4" component="h4" fontWeight="bold">Error Loading Products..</Typography></div>;
  }
  
  return (
    <>
      <Typography variant="h4" component="h4" sx={{fontWeight: "bold", marginBottom: "25px"}}>
        Products
      </Typography>
      <Typography variant="h6" component="h6" sx={{fontWeight: "bold", marginBottom: "25px"}}>
        All products at your fingertips with a 25% OFF.<br></br>
        Score limited-stock faves at low prices.
      </Typography>
      <br></br>

      <div>
        <label>
        <Typography variant="h6" component="h6">
        Products per page: 
          <select value={productsPerPage} onChange={handleProductsPerPageChange}>
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select></Typography>
        </label>
      </div>

      <div className="container-products">
      <Grid container spacing={2}>
      {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              title={product.title}
              price={product.price}
              key={product.id}
              id={product.id}
              description={product.description}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
      </>
  )
}
