import { useRoutes } from "react-router-dom"
import AllProducts from "../pages/AllProducts"
import SingleProduct from "../pages/SingleProduct"
import AllUserCarts from "../pages/AllUserCarts"

function Routes() {
    let element = useRoutes([
        {
            path: "products", 
            element: <AllProducts />,
        },
        {
            path: "products/:id", 
            element: <SingleProduct />,
        },
        {
            path: "carts", 
            element: <AllUserCarts />,
        },
        {
            path: "*", 
            element: <AllProducts />,
        }
    ])
  return (
    element
  )
}
export default Routes

