"use client"

import Image from "next/image";
import { BsBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import perfilImage from "@/app/Products/dashboard/assets/perfil.jpeg"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";
import HeaderMobile from "@/app/Components/HeaderMobile";


export default function InfoUser() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleCloseMenu = () => {
        setOpenMenu(false);
    }
    return (
        <div className="lg:h-10 h-auto flex gap-2 lg:gap-0 lg:flex-row flex-col-reverse justify-between items-center w-full ">

            {openMenu && (
                <HeaderMobile closeModal={() => handleCloseMenu()} isMobile={openMenu} />
            )}

            <div className="w-full flex lg:pt-0 pt-5 flex-col h-full">
                <h1 className="font-semibold text-xl">
                    Olá, Kauê
                </h1>
                <p className="text-xs">
                    Aqui estão as informações sobre suas vendas.
                </p>
            </div>



            <div className="lg:w-2/4 w-full h-full flex lg:items-end lg:justify-end items-center gap-3 justify-start">
                <button onClick={() => setOpenMenu(true)} className="w-1/4 items-center  justify-start lg:hidden flex h-10 ">
                    <HiMiniBars3CenterLeft fontSize={25} />
                </button   >
                <div className="w-full flex items-center justify-end gap-3">
                    <button className="w-8 hover:scale-90 hover:bg-purple-600 hover:text-white shadow-sm transition duration-300 h-8 flex items-center justify-center rounded-full border bg-white">
                        <FiSearch />
                    </button>
                    <button className="w-8 h-8 hover:scale-90 hover:bg-purple-600 hover:text-white shadow-sm transition duration-300 flex items-center justify-center rounded-full border bg-white">
                        <BsBellFill />
                    </button>
                    <button className="w-auto h-8 cursor-pointer  transition duration-300  flex items-center justify-center gap-3">
                        <Image className="rounded-full w-8 h-8 shadow border" width={100} height={100} alt="Imagem do Kauê" src={perfilImage.src} />
                        <h2 className="text-sm lg:flex hidden">
                            Kauê Lima
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    )
}