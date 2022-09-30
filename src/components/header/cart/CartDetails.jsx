import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

// import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../icons/DeleteIcon";

export default () => {
    const { products, deleteProduct } = useContext(CartContext);

    return (
        <div className="absolute inset-x-0 top-20 z-20 md:left-full md:w-96 md:-translate-x-full">
            <div className="mx-2 rounded-md bg-white p-4 shadow-md md:mx-0">
                <h3 className="pb-4 font-bold">Cart</h3>
                <hr />
                <div className="grid gap-3 py-5">
                    {products.length === 0 && (
                        <p className="py-16 text-center">Your cart is empty</p>
                    )}

                    {products.map((product) => (
                        <article
                            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-4"
                            key={product.id}
                        >
                            <img
                                src={product.imagesSmall[0]}
                                alt=""
                                className="w-full rounded-md"
                            />
                            <div>
                                <h4>{product.title}</h4>
                                <p>
                                    <span>
                                        $
                                        {(
                                            product.price *
                                            (1 - product.descount)
                                        ).toFixed(2)}
                                    </span>{" "}
                                    x <span>{product.quantity}</span>{" "}
                                    <span className="font-bold">
                                        $
                                        {(
                                            product.price *
                                            (1 - product.descount) *
                                            product.quantity
                                        ).toFixed(2)}
                                    </span>
                                </p>
                            </div>
                            <button
                                className="ml-auto"
                                onClick={() => deleteProduct(product.id)}
                            >
                                <DeleteIcon className="hover:fill-orange-700" />
                            </button>
                        </article>
                    ))}
                </div>
                {products.length !== 0 && (
                    <button className="w-full rounded-md bg-orange-primary py-4 text-white hover:bg-orange-700">
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
};
