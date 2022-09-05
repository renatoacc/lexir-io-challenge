import KissMy from "../assets/img/kiss-my-logo 1.svg";
import SiwuDist from "../assets/img/SiWu-Logo 2.svg";
import ErikaSpi from "../assets/img/erika-logo.svg";
import NineFold from "../assets/img/ninefold-distillery-logo.svg";
import Argala from "../assets/img/argala-logo.svg";
import Baldoria from "../assets/img/baldoria-logo.svg";
import Image from "next/image";

export const BrandCollection = ():JSX.Element => {
    return(
        <section className="w-screen">
            <header className="ml-5 pt-6 mt-5 mb-10">
                <h2 className="text-black text-5xl font-serif font-bold">Brands</h2>
            </header>
            <article className="grid gap-4 grid-cols-3 grid-rows-3 ml-5 mt-10 mr-5">
                <div className="box-content w-80 h-28 pl-3 mb-5 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-[#F9F9F9]">
                    <Image className="rounded-t-lg" height={50} src={SiwuDist} alt="Kiss My"/>
                    <div className="vertical"></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <header>
                            <h4 className="mt-2 mb-2 text-2xl font-bold tracking-tight">SIWU DISTILLET</h4>
                        </header>
                        <span className="mb-3 font-normal text-gray-700">Aquavit & Gin</span>
                        <figure>{/* Flag Vector */}</figure>
                        <span className="mb-3 font-normal text-gray-700">Copenhagen, Denmark</span>
                    </div>
                </div>
                <div className="box-content w-80 h-28 pl-3 mb-5 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-[#F9F9F9]">
                    <Image className="rounded-t-lg" height={50} src={ErikaSpi} alt="Kiss My"/>
                    <div className="vertical"></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <header>
                            <h4 className="mt-2 mb-2 text-2xl font-bold tracking-tight">ERIKA SPIRITS</h4>
                        </header>
                        <span className="mb-3 font-normal text-gray-700">Vodka & Gin</span>
                        <figure>{/* Flag Vector */}</figure>
                        <span className="mb-3 font-normal text-gray-700">Cognac, France</span>
                    </div>
                </div>
                <div className="box-content w-80 h-28 pl-3 mb-5 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-[#F9F9F9]">
                    <Image className="rounded-t-lg" height={50} src={NineFold} alt="Kiss My"/>
                    <div className="vertical"></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <header>
                            <h4 className="mt-2 mb-2 text-2xl font-bold tracking-tight">NINEFOLD</h4>
                        </header>
                        <span className="mb-3 font-normal text-gray-700">Rum</span>
                        <figure>{/* Flag Vector */}</figure>
                        <span className="mb-3 font-normal text-gray-700">D&G, Scotland</span>
                    </div>
                </div>
                <div className="box-content w-80 h-28 pl-3 mb-5 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-[#F9F9F9]">
                    <Image className="rounded-t-lg" height={50} src={Argala} alt="Kiss My"/>
                    <div className="vertical"></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <header>
                            <h4 className="mt-2 mb-2 text-2xl font-bold tracking-tight">ARGALA</h4>
                        </header>
                        <span className="mb-3 font-normal text-gray-700">Pastis, Bittres & Liqueurs</span>
                        <figure>{/* Flag Vector */}</figure>
                        <span className="mb-3 font-normal text-gray-700">Boves, Italy</span>
                    </div>
                </div>
                <div className="box-content w-80 h-28 pl-3 mb-5 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-[#F9F9F9]">
                    <Image className="rounded-t-lg" height={50} src={Baldoria} alt="Kiss My"/>
                    <div className="vertical"></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <header>
                            <h4 className="mt-2 mb-2 text-2xl font-bold tracking-tight">BALDORIA</h4>
                        </header>
                        <span className="mb-3 font-normal text-gray-700">Vermouth</span>
                        <figure>{/* Flag Vector */}</figure>
                        <span className="mb-3 font-normal text-gray-700">Boves, Italy</span>
                    </div>
                </div>
                <div className="box-content w-80 h-28 pl-3 mb-5 flex flex-col items-center bg-white rounded-lg border md:flex-row hover:bg-[#F9F9F9]">
                    <Image className="rounded-t-lg" height={50} src={KissMy} alt="Kiss My"/>
                    <div className="vertical"></div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <header>
                            <h4 className="mt-2 mb-2 text-2xl font-bold tracking-tight">KISS MY</h4>
                        </header>
                        <span className="mb-3 font-normal text-gray-700">Aperitif</span>
                        <figure>{/* Flag Vector */}</figure>
                        <span className="mb-3 font-normal text-gray-700">Izegem, Belgium</span>
                    </div>
                </div>
            </article>
        </section>
    );
}