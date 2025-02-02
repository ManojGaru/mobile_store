import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Media } from "reactstrap";

const BrandCard = ({ brand }) => {
  const router = useRouter();
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/pages/products")}
    >
      <div
        style={{ position: "absolute", top: 10, marginLeft: 57, width: 120 }}
      >
        <div
          style={{
            backgroundColor: "#000000",
            padding: 5,
            borderRadius: 3,
            fontSize: 10,
            fontWeight: "100",
            width: "70%",
            color: "#FFFFFF",
            fontFamily: "Arial",
          }}
        >
          From ₹ 4999
        </div>
      </div>

      <Card
        style={{
          width: 130,
          height: 130,
          margin: 10,
        }}
      >
        <CardContent style={{ justifyItems: "center" }}>
          <Media
            src={brand?.img}
            style={{
              height: 70,
              alignSelf: "center",
              border: "2px solid #777777",
              borderRadius: 5,
              padding: 3,
            }}
          />
          <Typography
            style={{
              marginTop: 5,
              letterSpacing: "0.05em",
              color: "#777777",
              textTransform: "uppercase",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            {brand?.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandCard;
