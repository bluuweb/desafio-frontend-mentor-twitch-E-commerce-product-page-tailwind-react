import { useState } from "react";
import SlideProduct from "@/components/product/col-images/SlideProduct";

export default ({ ARRAY_IMGS_SMALL, ARRAY_IMGS }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        if (window.innerWidth > 768) {
            setIsOpenModal(true);
        }
    };
    const handleCloseModal = () => setIsOpenModal(false);
    return (
        <>
            <SlideProduct
                handleOpenModal={handleOpenModal}
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
            />
            {isOpenModal && (
                <>
                    <SlideProduct
                        ARRAY_IMGS={ARRAY_IMGS}
                        ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                        handleCloseModal={handleCloseModal}
                        isOpenModal={isOpenModal}
                        className="hidden md:absolute md:top-1/2 md:left-1/2 md:grid md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:cursor-pointer md:grid-cols-4 md:gap-4"
                    />
                </>
            )}
        </>
    );
};
