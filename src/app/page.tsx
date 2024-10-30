import Image from "next/image";
import Navbar from './components/Navbar';
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
    <Navbar />
    <section className="text-center py-20 bg-[#1C223A]">
      <p className="w-[77px] h-[24px] gap-0 opacity-100 font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#3B82F6] mb-8 px-6 mx-auto">Welcome</p>
      <h1 className="text-5xl font-bold mb-8 text-white">Selling on the <br/> <span className="block mb-5"></span>internet like a pro</h1>
      <p className="w-[536px] h-[60px] gap-0 opacity-100 font-montserrat text-[17.5px] font-normal leading-[30px] tracking-[0.2px] text-center mb-8 mx-auto text-white">
  We know how large objects will act, but things on a <br/> small scale just do not act that way.
      </p>
      <div className="flex justify-center gap-4">
      <button className="bg-[#3B82F6] text-white px-6 py-3 rounded font-montserrat text-[14px] font-bold leading-[22px]"> Get Quote Now </button>
        <button className="border border-[#3B82F6] text-[#3B82F6] px-10 py-3 rounded font-montserrat text-[14px] font-bold leading-[22px]">Learn More</button>
      </div>
    </section>
    <Cards/>
    </>
    );
}

