import { Divider, Stack, Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import Service from "../Service";
import Cart from "../components/Cart";
import { Fragment } from "react";

export default function AllUserCarts() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => Service.getUsers(),
  });

const cartsMutation = useMutation((selectedUser) => {
  return Service.getUsersCarts(selectedUser);
});

const handleChange = (event) => {
  if (event.target.value) {
    cartsMutation.mutate(event.target.value);
  }
};

  return (
    <>
        <Typography variant="h4" component="h4" sx={{fontWeight: "bold", marginBottom: "25px"}}>
          Carts
        </Typography>

        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{width: "300px", marginBottom: "30px"}}>
           <InputLabel id="select-user">User</InputLabel>
             <Select
               labelId="select-user-label"
               id="select-user"
               label="User"
               onChange={handleChange}
               defaultValue={-1}
            >
                <MenuItem value={-1} sx={{display: "none"}}></MenuItem>
                  {usersQuery.data?.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                  {user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1) + " " + 
                  user.name.lastname.charAt(0).toUpperCase() + user.name.lastname.slice(1)}
                </MenuItem>
               ))}
              </Select>
          </FormControl>
        </Box>

        {(cartsMutation.data?.length > 0) ? (
        cartsMutation.data.map((cart) => (
          <Stack
            key={cart.id}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
              minWidth: "380px",
              margin: "0 auto",
              paddingTop: "15px",
            }}
          >
            <Fragment key={cart.id}>
              <Cart cart={cart} />
              <Divider variant="middle" />
            </Fragment>
          </Stack>
        ))
      ) : (
        cartsMutation.data && cartsMutation.data?.userId !== -1 ? (
          <div><Typography variant="h5" component="h5" sx={{fontWeight: "bold", marginBottom: "25px"}}>No Carts available</Typography></div>
        ) : null
      )}
    </>
  );
}





