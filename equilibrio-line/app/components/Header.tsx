import Image from 'next/image'
import logo from "../../public/Equilibrio-line-logo.png"


export default function Header() {
  return (
    <header className="h-[84px] w-full bg-white flex items-center text-black font-[adelia]">
      <div className='flex items-center justify-center'>
        <Image src={logo}
          width={80}
          height={80}
          alt="Logo Equilibrio Line" />
        <h1>Equlibrio Line</h1>
      </div>
    </header>
  );
}
