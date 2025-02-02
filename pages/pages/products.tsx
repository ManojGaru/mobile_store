import { Grid2, Typography } from "@mui/material";
import Layouts from "../../views/layouts/layout1";
import ProductCard from "components/ProductCard";
const Products = () => {
  return (
    <>
      <Layouts>
        <Typography>
          <div style={{ margin: 20, paddingInline: "5%" }}>
            <Grid2 container spacing={2}>
              {Array.from(Array(50).keys()).map((item, i) => (
                <Grid2
                  size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
                  key={Math.random()}
                >
                  <ProductCard />
                </Grid2>
              ))}
            </Grid2>
          </div>
        </Typography>
      </Layouts>
    </>
  );
};

export default Products;
