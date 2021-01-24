import { Card } from "react-bootstrap";
import {
    CardsWrapper,
    Cards,
    ListOfCards,
    QuantityWrapper,
    Container,
    Button,
    OrderWrapper,
    BuyBtn,
} from "./cart.styled";
import { connect } from "react-redux";
import "../catalog/loading.css";
import { removeFromCart, editQuantity } from "./actions";
import Order from "./order/order";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Cart({ cart, removeFromCart, editQuantity }) {
    console.log("Cart")
    var totalBowls = 0;
    var totalPrice = 0;
    cart.forEach((products) => {
        totalPrice += products.quantity * products.price;
        totalBowls += products.quantity;
    });

    return (
        <>
            <BrowserRouter>
                <Route exact path={"/cart"}>
                    <OrderWrapper>
                        <Card
                            style={{
                                width: "30rem",
                                height: "65px",
                                marginLeft: "24px",
                                backgroundColor: "grey",
                            }}
                        >
                            <Card.Body
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-around",
                                }}
                            >
                                <p>
                                    Total price: {totalPrice} | Total items: {totalBowls}
                                </p>
                                <BuyBtn>
                                    <Link to={"/cart/order"}>Buy</Link>
                                </BuyBtn>
                            </Card.Body>
                        </Card>
                    </OrderWrapper>
                    <CardsWrapper>
                        <Cards>
                            <ListOfCards>
                                {cart.map((product) => (
                                    <Card
                                        style={{
                                            width: "18rem",
                                            height: "50rem",
                                            marginLeft: "24px",
                                            backgroundColor: "grey",
                                        }}
                                        key={product.key}
                                    >
                                        <Card.Img variant="top" src={product.image} alt="lawyer" />
                                        <Card.Body
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <>
                                                <Card.Title>{product.title}</Card.Title>
                                                <Card.Text>Services: {product.title}</Card.Text>
                                                <Card.Text>
                                                    Price: {product.price}$
                                                </Card.Text>
                                                <Card.Text>Rating: {product.rating}/5</Card.Text>
                                                <QuantityWrapper>
                                                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                                                    <Container>
                                                        <Button
                                                            onClick={() => {
                                                                editQuantity(product.key, product.quantity - 1);
                                                            }}
                                                            style={{
                                                                backgroundColor: "green"
                                                            }}
                                                        >
                                                            <div />
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                editQuantity(product.key, product.quantity + 1);
                                                            }}
                                                            style={{
                                                                backgroundColor: "#B7D4FF"
                                                            }}
                                                        >
                                                            <div />
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                removeFromCart(product.key);
                                                            }}
                                                            style={{
                                                                backgroundColor: "red"
                                                            }}
                                                        >
                                                            <div />
                                                        </Button>
                                                    </Container>
                                                </QuantityWrapper>
                                            </>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </ListOfCards>
                        </Cards>
                    </CardsWrapper>
                </Route>
                <Route path={"/cart/order"}>
                    <Order />
                </Route>
            </BrowserRouter>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.bowlStore.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (key) => dispatch(removeFromCart(key)),
        editQuantity: (key, quantity) => dispatch(editQuantity(key, quantity)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);