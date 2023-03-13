import { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Form, Image, ListGroup, Row } from "react-bootstrap";
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
    <>
        <style type="text/css">
        {`
            #dropdown-basic-button {
                background: rgba(0, 0, 0, 0) !important; 
                color: white;
            }

        `}
        </style>

        <div id="shoppingCartContainer">
            <DropdownButton id="shoppingCart" title={<CartIcon width="48px" height="48px"/>}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
    </>
  );
};

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