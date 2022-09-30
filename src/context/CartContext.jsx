import { createContext, useState } from "react";

export const CartContext = createContext();

export default (props) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        if (products.length === 0) {
            return setProducts([product]);
        }

        const cartProduct = products.map((item) => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: item.quantity + product.quantity,
                };
            } else {
                return item;
            }
        });

        setProducts(cartProduct);
    };

    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ products, addProduct, deleteProduct }}>
            {props.children}
        </CartContext.Provider>
    );
};
