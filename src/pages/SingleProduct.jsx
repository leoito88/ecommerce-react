import { Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import Service from "../Service";
import { useParams } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton";


export default function SingleProduct() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => Service.getProduct(id),
  });

  if (isLoading) {
    return <div><ProductSkeleton /></div>;
  }

  return (
    <>
      <Grid container spacing={2} sx={{ backgroundColor: "#fff", padding: "60px" }}>
        <Grid item xs={4} align="center">
          <img src={data?.image} width="70%" height="70%" style={{ objectFit: "scale-down" }} alt="Product Image" />
        </Grid>

        <Grid item xs={8} align="center">
          <Typography variant="h3" component="h3" fontWeight="bold" align="right">
            {data?.title}
          </Typography><br></br>

          <Typography variant="h5" component="h5" fontWeight="bold" align="right">
            {data?.category.charAt(0).toUpperCase() + data?.category.slice(1)}
          </Typography><br></br>

          <Typography variant="h6" component="h6" align="right">
            {data?.description}
          </Typography><br></br>

          <Typography variant="h3" component="h3" fontWeight="bold" align="right">
            {data?.price} USD
          </Typography>

        </Grid>
      </Grid>
    </>
  );
}