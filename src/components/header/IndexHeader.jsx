import { useState } from "react";

import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import NavLinkHeader from "@/components/header/NavLinkHeader";
import CartDetails from "./cart/CartDetails";

const IndexHeader = () => {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);

    const { products } = useContext(CartContext);

    const quantityProductsCart = () => {
        const quantity = products.reduce(
            (acc, current) => acc + current.quantity,
            0
        );
        return quantity;
    };

    return (
        <>
            <header className="container relative mx-auto flex items-center gap-8 p-4 md:p-0">
                <button
                    className="md:hidden"
                    onClick={() => setIsOpenNavbar(true)}
                >
                    <MenuIcon />
                </button>
                <img
                    src={LogoSneakes}
                    alt="Logo sneakers"
                    className="mr-auto mb-1 h-5 md:mr-0"
                />
                <nav
                    className={`${
                        isOpenNavbar
                            ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8"
                            : "hidden"
                    } font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0`}
                >
                    <button
                        className="mb-12 md:hidden"
                        onClick={() => setIsOpenNavbar(false)}
                    >
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                <div className="flex gap-4">
                    <button
                        className="relative"
                        onClick={() => setIsOpenCart(!isOpenCart)}
                    >
                        <CartIcon className="hover:fill-black" />
                        {quantityProductsCart() > 0 && (
                            <span className="absolute top-0 right-0 translate-x-1 rounded-full bg-orange-primary px-1 text-xs text-white">
                                {quantityProductsCart()}
                            </span>
                        )}
                    </button>
                    <img src={AvatarImage} alt="" className="w-10" />
                </div>
                {isOpenCart && <CartDetails />}
            </header>
            <span className="container mx-auto hidden h-[3px] w-full bg-gray-500 md:block"></span>
        </>
    );
};
export default IndexHeader;
