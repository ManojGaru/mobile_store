import { Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Media } from "reactstrap";

const ProductCard = () => {
  const router = useRouter();

  const clickProductDetail = () => {
    router.push(`/product-details/${1}` + "-" + `${" Redmi 12 5g"}`);
  };
  return (
    <div onClick={clickProductDetail}>
      <div
        style={{
          position: "relative",
          top: 30,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            backgroundColor: "#fe0100",
            padding: 5,
            width: 130,
            borderBottomRightRadius: 15,
            fontFamily: "Arial",
          }}
        >
          ₹ 11000 OFF
        </div>
      </div>
      <Card style={{ justifyItems: "flex-start", height: 200 }}>
        <CardContent style={{ display: "flex" }}>
          <Media
            src="https://billing.mobixpress.in/uploads/model/REDMI_12_5G_(1).jpg"
            style={{ height: 150, marginTop: 20 }}
          />
          <div style={{ padding: 15 }}>
            <span
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Redmi 12 5g
            </span>
            <br />
            <span
              style={{
                textTransform: "uppercase",
                fontSize: 12,
                color: "#000",
              }}
            >
              REDMI 12 5G (6/128) GB, JADE BLACK
            </span>
            <br />
            <span
              style={{
                textTransform: "uppercase",
                fontSize: 12,
                color: "#000",
              }}
            >
              Quality : Supermint
            </span>
            <br />

            <span
              style={{
                textTransform: "capitalize",
                fontSize: 12,
                color: "#4caf50",
              }}
            >
              87 + already sold
            </span>
            <br />
            <br />
            <span
              style={{
                textTransform: "capitalize",
                fontSize: 12,
                color: "#000",
                fontWeight: "bold",
                fontFamily: "Arial",
              }}
            >
              ₹ 29999
            </span>
            <span
              style={{
                textTransform: "capitalize",
                textDecorationLine: "line-through",
                fontSize: 12,
                fontWeight: "bold",
                color: "red",
                fontFamily: "Arial",
                marginLeft: 20,
              }}
            >
              ₹ 39999
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
