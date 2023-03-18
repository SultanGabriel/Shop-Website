import { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Form, Image, ListGroup, Row } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
// import { AiFillDelete } from "react-icons/ai";
// import Rating from "./Rating";
import { ReactComponent as CartIcon } from "../img/shopping-cart.svg";
const Cart = () => {
    const cart = {}
//   const {
//     state: { cart },
//     dispatch,
//   } = CartState();
//   const [total, setTotal] = useState();

//   useEffect(() => {
//     setTotal(
//       cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
//     );
//   }, [cart]);

  return (
    <div>
        <div className="mx-2">
            <DropdownButton align="end" id="shoppingCart" title={<CartIcon width="48px" height="48px"/>}>
                 <div className="cart-dropdown">
                    <CartItem title="Hello"/>
                    <CartItem title="Hello"/>
                    <CartItem title="Hello"/>
                    <CartFooter/>
                 </div>
            </DropdownButton>
        </div>
    </div>
  );
};

const CartItem = ({title}) => {
    return (
        <Dropdown.Item className="mb-1" href="">
            <p className="m-0">{title}</p>
        </Dropdown.Item>
        );
}

const CartFooter = ({}) => {
    return ( 
        <div className="container border-top">
            <p className="m-0">Total ..</p>
            <p className="m-0">Tax ..</p>
            <p className="m-0 ">Checkout</p>
        </div>
    )
}

export default Cart;
// 
// import React from 'react'
// import { Button, ButtonGroup, DropdownButton } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';

// function Cart() {
//     return (
//         <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </DropdownButton>
//     );
// }

// export default Cart;