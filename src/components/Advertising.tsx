import BrandAd from '../assets/img/pexels-cottonbro-4254032.svg';
import Image from 'next/image';
export const Advertising = ():JSX.Element =>{
    return(
        <section className='box-content flex h-65 ml-5 mr-5 bg-[#F9F9F9]'>
            <article className='p-5 pt-10'>
                <h4 className='text-black text-4xl font-serif font-bold'>Have a brand you&#39;d like to see on <span className='text-[#1C8C64]'>Lexir</span></h4>
                <p className='mt-5 mb-10 font-normal text-gray-700'>Lexir is always looking to connect with new exciting craft brands from around the world. If you have a brand in mind that you&#39;d like to see on Lexir, let us know.</p>
                <button className='text-white bg-[#2D2D2D] focus:outline-none font-normal rounded text-sm px-10 py-2.5 mr-4 mb-2'>Suggest a Brand</button>
            </article>
            <figure className='w-screen'>
                <Image width={608} src={BrandAd} alt='Wine cellar'/>
            </figure>
        </section>
    );
}