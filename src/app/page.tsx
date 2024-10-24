import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#cfb7ff2f] p-10 w-full h-screen flex">
      <main className="w-full h-full flex items-center justify-center">
        <div className="w-[250px] flex flex-col items-center justify-around p-10 bg-white h-[250px] rounded-2xl shadow">
          <h1 className="text-5xl w-full text-center font-bold">
            <span className="text-purple-600">e</span>Front
          </h1>
          <Link className="w-full flex h-10 font-medium text-purple-600 hover:scale-90 transition duration-300 rounded-lg items-center justify-center bg-purple-200" href={"Products/dashboard/"}>Entrar</Link>
        </div>
      </main>
    </div>
  );
}
