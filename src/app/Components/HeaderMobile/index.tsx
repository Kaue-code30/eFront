import { BsGear } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { IoCloseCircleOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlinePowerSettingsNew } from "react-icons/md";

export interface props {
    isMobile: boolean;
    closeModal: () => void;
}

export default function HeaderMobile({ isMobile, closeModal }: props) {
    return (
        <header className="w-full bg-white top-0 p-8 h-full z-50 fixed">
            <IoCloseCircleOutline onClick={() => closeModal()} fontSize={30} />
            <nav className={`w-full lg:flex ${isMobile ? "flex h-screen" : "hidden"} pt-10 lg:h-full flex-col gap-20  lg:rounded-r-3xl  `}>
                <div className="w-full cursor-auto flex items-center p-2 justify-start h-10">
                    <h1 className="text-3xl font-bold">
                        <span className="text-purple-600">e</span>Front
                    </h1>
                </div>
                <ul className="w-full gap-2 flex flex-col h-full">
                    <li className="w-full items-center font-semibold justify-start h-14 flex">
                        <button className="w-full h-full p-2 text-purple-600 rounded-lg  bg-[#9E6EFE0F] transition duration-300 hover:bg-[#9E6EFE0F] gap-2 flex items-center justify-start">
                            <MdOutlineDashboard />
                            <p className="text-sm">
                                Dashboard
                            </p>
                        </button>
                    </li>
                    <li className="w-full items-center font-semibold justify-start h-14 flex">
                        <button className="w-full h-full p-2 hover:text-purple-600 rounded-lg transition duration-300 hover:bg-[#9E6EFE0F] gap-2 flex items-center justify-start">
                            <IoWalletOutline />
                            <p className="text-sm">
                                Carteira
                            </p>
                        </button>
                    </li>
                    <li className="w-full items-center font-semibold justify-start h-14 flex">
                        <button className="w-full h-full p-2 hover:text-purple-600 rounded-lg transition duration-300 hover:bg-[#9E6EFE0F] gap-2 flex items-center justify-start">
                            <FiShoppingCart />
                            <p className="text-sm">
                                Transações
                            </p>
                        </button>
                    </li>
                    <li className="w-full items-center font-semibold justify-start h-14 flex">
                        <button className="w-full h-full p-2 hover:text-purple-600 rounded-lg transition duration-300 hover:bg-[#9E6EFE0F] gap-2 flex items-center justify-start">
                            <GoPeople />
                            <p className="text-sm">
                                Suporte
                            </p>
                        </button>
                    </li>
                    <li className="w-full items-center font-semibold justify-start h-14 flex">
                        <button className="w-full h-full p-2 hover:text-purple-600 rounded-lg transition duration-300 hover:bg-[#9E6EFE0F] gap-2 flex items-center justify-start">
                            <BsGear />
                            <p className="text-sm">
                                Ajustes
                            </p>
                        </button>
                    </li>
                    <li className="w-full items-center font-semibold justify-start h-14 flex">
                        <button className="w-full h-full p-2 text-[#F03D3D] rounded-lg transition duration-300 bg-[#F03D3D0F] gap-2 flex items-center justify-start">
                            <MdOutlinePowerSettingsNew />
                            <p className="text-sm">
                                Desconectar
                            </p>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}