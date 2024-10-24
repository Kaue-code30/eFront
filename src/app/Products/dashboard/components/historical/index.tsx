export default function HistoricalShop() {
    return (
        <div className="lg:h-[300px] h-auto flex gap-2  lg:gap-0 lg:flex-row flex-col justify-between items-center w-full ">
            <div className="w-full flex flex-col h-full bg-white gap-3 rounded-2xl shadow p-8">
                <h2 className="font-medium text-lg">
                    Histórico de compradores
                </h2>


                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Data
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Localização
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Valor
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Situação
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-xs">
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    #12345
                                </th>
                                <td className="px-6 py-4">
                                    02/08/2024
                                </td>
                                <td className="px-6 py-4">
                                    Kauê Silva de Lima
                                </td>
                                <td className="px-6 py-4">
                                    São Paulo
                                </td>
                                <td className="px-6 py-4">
                                    R$ 30,00
                                </td>
                                <td className="px-6 flex items-center font-medium justify-start gap-2 py-4">
                                    <span className="w-3 h-3 rounded-full bg-yellow-300"></span> Em análise
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    #14345
                                </th>
                                <td className="px-6 py-4">
                                    04/08/2024
                                </td>
                                <td className="px-6 py-4">
                                    Denise Almeida
                                </td>
                                <td className="px-6 py-4">
                                    Rio de Janeiro
                                </td>
                                <td className="px-6 py-4">
                                    R$ 30,00
                                </td>
                                <td className="px-6 flex items-center font-medium justify-start gap-2 py-4">
                                    <span className="w-3 h-3 rounded-full bg-green-500"></span> Aprovado
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}