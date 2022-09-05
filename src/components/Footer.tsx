import Logo from "../assets/img/logo-w.svg";
import Facebook from "../assets/img/facebook.svg";
import Instagram from "../assets/img/instagram.svg";
import Medium from "../assets/img/medium.svg";
import Linkedin from "../assets/img/linkedin.svg";
import Image from "next/image";

export const Footer = ():JSX.Element =>{
    return(
        <footer className="p-10 bg-[#2D2D2D]">
    <div className="flex justify-between">
        <div className="mb-6">
            <a href="" className="flex items-center">
                <Image src={Logo} height={24} className="mr-3 h-8 fill-white" alt="Lexir" />
            </a>
        </div>
        <div className="grid grid-cols-5 gap-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F8F8F] uppercase">Community</h2>
                <ul className="text-white">
                    <li className="mb-4">
                        <a href="" className="hover:underline">Lexir for Brands</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Business Buyers</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Sales Affiliates</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F8F8F] uppercase">Platform</h2>
                <ul className="text-white">
                    <li className="mb-4">
                        <a href="" className="hover:underline">Resources</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Pricing</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Get Started</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F8F8F] uppercase">Company</h2>
                <ul className="text-white">
                    <li className="mb-4">
                        <a href="" className="hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Contact</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Legal</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F8F8F] uppercase">Lexir Shop</h2>
                <ul className="text-white">
                    <li className="mb-4">
                        <a href="" className="hover:underline">Brands</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Spirits</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Wine</a>
                    </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-white">
                <Image src={Medium} height={30} alt="Medium"/>
            </a>
            <a href="#" className="text-white">
                <Image src={Facebook} height={30} alt="Facebook"/>
            </a>
            <a href="#" className="text-white">
                <Image src={Instagram} height={30} alt="Instagram"/>
            </a>
            <a href="#" className="text-white">
                <Image src={Linkedin} height={30} alt="Linkedin"/>
            </a>
        </div>
        </div>
    </div>
    <hr className="my-6 border-[#8F8F8F]" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center">© 2022 Lexir .Inc </span>
        <div>
            <span className="text-sm text-white mr-12"> Privacy</span>
            <span className="text-sm text-white"> Terms of service</span>
        </div>
    </div>
</footer>
    );
}