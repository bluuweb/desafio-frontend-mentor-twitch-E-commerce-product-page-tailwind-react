import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../icons/DeleteIcon";

export default () => {
    const { products } = useContext(CartContext);

    return (
        <div className="absolute inset-x-0 top-20 z-20 md:left-full md:w-96 md:-translate-x-full">
            <div className="mx-2 rounded-md bg-white p-4 shadow-md md:mx-0">
                <h3 className="pb-4 font-bold">Cart</h3>
                <hr />
                <div className="grid gap-3 py-5">
                    {products.map((product, i) => (
                        <article
                            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-4"
                            key={i}
                        >
                            <img
                                src={imgProductSmall1}
                                alt=""
                                className="w-full rounded-md"
                            />
                            <div>
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>
                                    <span>$125.00</span> x <span>3</span>{" "}
                                    <span className="font-bold">$375.000</span>
                                </p>
                            </div>
                            <button className="ml-auto">
                                <DeleteIcon className="hover:fill-orange-700" />
                            </button>
                        </article>
                    ))}
                </div>
                <button className="w-full rounded-md bg-orange-primary py-4 text-white hover:bg-orange-700">
                    Checkout
                </button>
            </div>
        </div>
    );
};
