import React, { useState } from "react";
import { useEffect } from "react";
import { getToken } from "./helpers";

const AuthProvider = ({ children }) => {
    const [cartData, setCartData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const authToken = getToken();

    const fetchCart = async (token) => {
        // TODO Fetch Cart From Strapi ..
        // try {
        //     const response = await fetch(`${API}/users/me`, {
        //         headers: { Authorization: `${BEARER} ${token}` },
        //     });

        //     const data = await response.json();

        //     setUserData(data);
        // } catch (error) {
        //     console.error(error);
        //     // message.error("Error While Getting Logged In User Details");
        // } finally {
        //     setIsLoading(false);
        // }
    };

    const handleUser = (user) => {
        setUserData(user);
    };

    useEffect(() => {
        if (authToken) {
            fetchCart(authToken);
        }
    }, [authToken]);

    return (
        <CartContext.Provider
            // value={{ user: userData, cartReducer ?? , isLoading }}
            value={{ user: userData, setUser: handleUser, isLoading }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default AuthProvider;