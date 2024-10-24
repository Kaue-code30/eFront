"use client"
import dynamic from 'next/dynamic';

const InfoUser = dynamic(() => import('./components/infoUser'), { ssr: false });
const CardsWithBars = dynamic(() => import('./components/cardsWithBars'), { ssr: false });
const CardsWithNumbers = dynamic(() => import('./components/cardWithNumber'), { ssr: false });
const HistoricalShop = dynamic(() => import('./components/historical'), { ssr: false });

export default function HomeDashboard() {
  return (
    <div className="bg-[#F3F4F8] max-w-[1400px] items-center justify-center p-8 lg:p-10 w-full overflow-auto h-auto lg:h-screen flex">
      <main className="w-full h-full gap-6 flex flex-col">
        <InfoUser />
        <CardsWithBars />
        <CardsWithNumbers />
        <HistoricalShop />
      </main>
    </div>
  );
}
