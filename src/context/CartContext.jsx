import { createContext, useState } from "react";

export const CartContext = createContext();

export default (props) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts((prev) => prev.push(product));
    };

    const deleteProduct = (products) => {
        setProducts((prev) => prev.filter((item) => item.id !== products.id));
    };

    return (
        <CartContext.Provider value={{ products, addProduct, deleteProduct }}>
            {props.children}
        </CartContext.Provider>
    );
};
