import SlideProduct from "./SlideProduct";
import ModalProduct from "./SlideProduct";
import { useState } from "react";
import { useEffect } from "react";

export default ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        isOpenModal
            ? document.body.style.setProperty("--isModalOpen", "block")
            : document.body.style.setProperty("--isModalOpen", "none");
    }, [isOpenModal]);

    const handleOpenModal = () =>
        window.innerWidth > 767 && setIsOpenModal(true);

    const handleCloseModal = () => setIsOpenModal(false);

    return (
        <>
            <SlideProduct
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                className="grid md:grid-cols-4 md:gap-4"
                handleOpenModal={handleOpenModal}
            />
            {isOpenModal && (
                <ModalProduct
                    ARRAY_IMGS={ARRAY_IMGS}
                    ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                    isOpenModal={isOpenModal}
                    className="after hidden md:absolute md:top-1/2 md:left-1/2 md:z-10 md:grid md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
                    handleCloseModal={handleCloseModal}
                />
            )}
            {/* <span
                onClick={handleCloseModal}
                className={`md:absolute md:top-0 md:left-0 md:h-full md:w-full md:bg-[rgba(0,0,0,0.7)] ${
                    isOpenModal ? "md:block" : "md:hidden"
                }`}
            ></span> */}
        </>
    );
};
