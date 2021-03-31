import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardBody,
  CardFooter,
} from "reactstrap";
import { formatPrice } from "../helpers";
import { AppContext } from "../context";
import Cart from "../Cart";

const Store = (props) => {
  const appContext = React.useContext(AppContext);
  const { inventory, addItemToCart } = appContext;

  return (
    <>
      <Cart />
      <h2 className="display-4 text-center">Shop</h2>
      <ul className="row d-flex align-content-stretch">
        {Object.values(inventory).map((product, index) => {
          const isNthItem_Odd = index % 2 === 0;

          const { id, image, name, price, desc, inStock } = product;
          return (
            <div className={`col-sm-6 mt-2 mb-2`}>
              <Card className={`mt-2 h-100`} tag="li" key={product.id}>
                <CardHeader className="h2">{name}</CardHeader>
                <CardBody>
                  <CardImg
                    style={{ maxHeight: "400px", width: "auto" }}
                    src={image}
                    alt={name}
                    className="p-3 img-thumbnail"
                  />
                  <CardText className="align-middle p-2">{desc}</CardText>
                </CardBody>
                <CardFooter className="p-3">
                  <Button
                    disabled={!inStock}
                    onClick={() => addItemToCart(id)}
                    className="ml-3 btn-success"
                  >
                    {inStock ? "Add to Order" : "Sold out!"}
                  </Button>
                  <span className="ml-3">@{formatPrice(price)}/lb</span>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default Store;
