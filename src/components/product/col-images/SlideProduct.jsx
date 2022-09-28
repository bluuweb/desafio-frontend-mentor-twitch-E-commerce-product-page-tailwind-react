import { useState } from "react";

import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";
import { useEffect } from "react";

export default ({
    ARRAY_IMGS_SMALL = [],
    ARRAY_IMGS = [],
    isOpenModal = false,
    handleCloseModal = null,
    handleOpenModal = null,
    ...props
}) => {
    const [index, setIndex] = useState(0);
    const [classControllerModal, setClassControllerModal] = useState("");

    useEffect(() => {
        isOpenModal
            ? setClassControllerModal(
                  "absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4"
              )
            : setClassControllerModal(
                  "absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
              );
    }, [isOpenModal]);

    const handleClickNext = () => {
        index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
    };

    return (
        <section
            className="grid md:relative md:cursor-pointer md:grid-cols-4 md:gap-4"
            {...props}
        >
            {isOpenModal && (
                <button
                    className="md:absolute md:top-[-30px] md:right-0 md:z-10"
                    onClick={handleCloseModal}
                >
                    Cerrar modal
                </button>
            )}

            <div className="relative col-span-4">
                <img
                    src={ARRAY_IMGS[index]}
                    alt=""
                    className="aspect-[16/12] w-full md:aspect-[16/18] md:rounded-md"
                    onClick={handleOpenModal}
                />
                <div className={classControllerModal}>
                    <button
                        className="grid h-10 w-10 place-items-center rounded-full bg-white md:-ml-9"
                        onClick={handleClickPrev}
                    >
                        <PrevIcon />
                    </button>
                    <button
                        className=" grid h-10 w-10 place-items-center rounded-full bg-white md:-mr-9"
                        onClick={handleClickNext}
                    >
                        <NextIcon />
                    </button>
                </div>
            </div>
            {ARRAY_IMGS_SMALL.map((imgSmall, i) => (
                <div
                    key={imgSmall}
                    className="group hidden overflow-hidden rounded-md md:relative md:block"
                    onClick={() => setIndex(i)}
                >
                    <img src={imgSmall} alt="" className="" />
                    {i === index && (
                        <span className="absolute top-0 h-full w-full bg-[rgba(255,255,255,0.5)]"></span>
                    )}
                    <span className="absolute top-0 h-full w-full group-hover:bg-[rgba(255,255,255,0.5)]"></span>
                </div>
            ))}
        </section>
    );
};
