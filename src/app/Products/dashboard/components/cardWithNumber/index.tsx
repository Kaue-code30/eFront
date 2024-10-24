export default function CardsWhithNumbers() {

    const content = [
        {
            title: "Total de vendas",
            value: "R$ 3.265,21",
            porcent: "+ 11%",
            colorBack: "BDF5EC",
            colorText: "009881"

        },
        {
            title: "Total líquido",
            value: "R$ 2.825,58",
            porcent: "+15%",
            colorBack: "BDF5EC",
            colorText: "009881"
        },
        {
            title: "Compras canceladas",
            value: "R$ 130,00",
            porcent: "-80%",
            colorBack: "F03D3D0F",
            colorText: "F03D3D"
        },
        {
            title: "Reembolsos",
            value: "R$ 345,00",
            porcent: "-78%",
            colorBack: "F03D3D0F",
            colorText: "F03D3D"
        },
    ]

    return (
        <div className="lg:h-[150px] h-auto flex gap-2  lg:gap-0 lg:flex-row flex-col justify-between items-center w-full ">
            <ul className="w-full gap-6  h-full flex lg:flex-row flex-col">
                {
                    content.map((data, key) => (
                        <li key={key} className="h-full cursor-default flex font-medium gap-3 flex-col items-start justify-center bg-white p-8 w-full lg:w-1/4 rounded-2xl shadow">
                            <p>
                                {data.title}
                            </p>
                            <p className="text-2xl ">
                                {data.value}
                            </p>
                            <p className={`p-2 ${key === 0 ? "text-[#009881] bg-[#bdf5ec]" : ""} bg-[#${data.colorBack}] rounded-md text-[#${data.colorText}] `}>
                                {data.porcent}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}