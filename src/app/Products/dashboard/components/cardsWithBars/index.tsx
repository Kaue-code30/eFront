"use client"

import ApexCharts from "apexcharts";
import { useEffect } from "react";

export default function CardsWithBars() {


    const options = {
        colors: ["#1A56DB", "#FDBA8C"],
        series: [
            {
                name: "Organic",
                color: "#9E6EFE3D",
                data: [
                    { x: "Mon", y: 231 },
                    { x: "Tue", y: 122 },
                    { x: "Wed", y: 63 },
                    { x: "Thu", y: 421 },
                    { x: "Fri", y: 122 },
                    { x: "Sat", y: 323 },
                    { x: "Sun", y: 111 },
                ],
            },
            {
                name: "Social media",
                color: "#9E6EFE",
                data: [
                    { x: "Mon", y: 232 },
                    { x: "Tue", y: 113 },
                    { x: "Wed", y: 341 },
                    { x: "Thu", y: 224 },
                    { x: "Fri", y: 522 },
                    { x: "Sat", y: 411 },
                    { x: "Sun", y: 243 },
                ],
            },
        ],
        chart: {
            type: "bar",
            height: "250px",
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "end",
                borderRadius: 8,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        states: {
            hover: {
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            floating: false,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
    }
    // useEffect(() => {
    //     if (document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
    //         const chart = new ApexCharts(document.getElementById("column-chart"), options);
    //         chart.render();
    //     }
    // }, [])



    return (
        <div className="lg:h-[350px] h-auto flex gap-2  lg:gap-0 lg:flex-row flex-col justify-between items-center w-full ">
            <div className="lg:w-[49%] w-full p-7 lg:p-8 shadow h-[300px] lg:h-full bg-white rounded-2xl">
                <h2 className="font-medium">
                    Gráfico de Receitas
                </h2>

                <div className=" w-full bg-white rounded-lg">
                    <div id="column-chart"></div>
                    {/* <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                        <div className="flex justify-between items-center pt-5">

                           

                            <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="#"
                                className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                Leads Report
                                <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    </div> */}
                </div>

            </div>
            <div className="lg:w-[49%] w-full p-7 lg:p-8 gap-3  flex flex-col shadow h-1/2 lg:h-full bg-white rounded-2xl">
                <h2 className="font-medium">
                    Histórico de transações
                </h2>
                <ul className="flex flex-col h-full justify-around">
                    <li className="w-full cursor-default flex items-center p-3 px-5 justify-between h-14 rounded-lg shadow-sm  bg-[#b18bfe0f]">
                        <p className="text-purple-600 lg:text-base text-sm font-medium">
                            Ontem
                        </p>
                        <p className="text-purple-600 lg:text-base text-sm font-medium">
                            R$ -540,32
                        </p>
                    </li>
                    <li className="w-full cursor-default flex items-center p-3 px-5 justify-between h-14 rounded-lg shadow-sm  bg-[#b18bfe0f]">
                        <p className="text-purple-600 lg:text-base text-sm font-medium">
                            Quinta-feira
                        </p>
                        <p className="text-purple-600 lg:text-base text-sm font-medium">
                            R$ -273,90
                        </p>
                    </li>
                    <li className="w-full cursor-default flex items-center p-3 px-5 justify-between h-14 rounded-lg shadow-sm  bg-[#b18bfe0f]">
                        <p className="text-purple-600 lg:text-base text-sm font-medium">
                            Segunda-Feira
                        </p>
                        <p className="text-purple-600 lg:text-base text-sm font-medium">
                            R$ -1.456,20
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}