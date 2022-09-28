import CartIcon from "@/components/icons/CartIcon";
export default () => {
    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-4 font-bold text-orange-primary">
                Sneaker Company
            </p>
            <h2 className="mb-4 text-3xl font-bold">
                Fall Limited Edition Sneakers
            </h2>
            <p className="mb-5 text-dark-grayish-blue">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold">
                <span className="text-3xl">$125.00</span>
                <span className="mr-auto rounded-md bg-pale-orange px-1 py-0 text-orange-primary">
                    50%
                </span>
                <span className="text-right text-grayish-blue line-through md:col-span-3 md:text-left">
                    $250.00
                </span>
            </div>
            <div className="grid-col-3 grid gap-3 font-bold md:grid-cols-[1fr_1.6fr]">
                <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 px-5 pb-2 pt-1 md:col-span-1">
                    <button className="text-2xl text-orange-primary">-</button>
                    <span>0</span>
                    <button className="text-2xl text-orange-primary">+</button>
                </div>
                <button className="col-span-3 flex items-center justify-center  gap-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700 md:col-span-1">
                    <CartIcon className="fill-white" />
                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};
