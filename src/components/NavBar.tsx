import logo from "../assets/img/logo.svg";
import signIn from "../assets/img/SignIn.svg";
import cart from "../assets/img/Cart.svg";
import Image from "next/image";


export const NavBar = ():JSX.Element => {
 return (
   <section className="w-screen bg-white flex items-center justify-between p-9 drop-shadow-md">
      <figure className="logo-nav">
        <Image height={24} src={logo} alt='Lexir'/>
      </figure>
      <nav>
        <ul className="flex items-center space-x-8 flex-wrap">
          <li><a href={'/'}>PRODUCTS</a></li>
          <li><a href={'/'}>BRANDS</a></li>
          <li><a href={'/'}><Image height={15} src={signIn} alt='Sign In'/>SIGN IN</a></li>
          <li><a href={'/'}><Image height={15} src={cart} alt='Cart'/>CART</a></li>
        </ul>
      </nav>
   </section>
 );
}