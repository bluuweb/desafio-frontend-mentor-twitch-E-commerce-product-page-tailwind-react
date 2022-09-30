import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartIcon from "@/components/icons/CartIcon";
import { useState } from "react";

export default ({ objectProduct }) => {
    const { addProduct } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    const addProductToCart = () => {
        addProduct({
            ...objectProduct,
            quantity: count === 0 ? 1 : count,
        });
        setCount(0);
    };

    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
                {objectProduct.company}
            </p>
            <h2 className="mb-4 text-3xl font-bold">{objectProduct.title}</h2>
            <p className="mb-5 text-dark-grayish-blue">
                {objectProduct.description}
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">
                <span className="text-3xl">
                    $
                    {(
                        objectProduct.price *
                        (1 - objectProduct.descount)
                    ).toFixed(2)}
                </span>
                <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
                    {objectProduct.descount * 100}%
                </span>
                <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
                    {objectProduct.price.toFixed(2)}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
                <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
                    <button
                        className="text-3xl text-orange-primary"
                        onClick={decrement}
                    >
                        -
                    </button>
                    <span className="text-xl">{count}</span>
                    <button
                        className="text-3xl text-orange-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
                <button
                    className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700 md:col-span-1"
                    onClick={addProductToCart}
                >
                    <CartIcon fill="#fff" className="fill-white" />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};
