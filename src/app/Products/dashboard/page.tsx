import CardsWithBars from "./components/cardsWithBars";
import CardsWhithNumbers from "./components/cardWithNumber";
import HistoricalShop from "./components/historical";
import InfoUser from "./components/infoUser";

export default function HomeDashboard() {
  return (
    <div className="bg-[#F3F4F8] max-w-[1400px] items-center justify-center p-8 lg:p-10 w-full overflow-auto h-auto lg:h-screen flex">
      <main className="w-full h-full gap-6 flex flex-col">
        <InfoUser />
        <CardsWithBars />
        <CardsWhithNumbers />
        <HistoricalShop />
      </main>
    </div>
  );
}
