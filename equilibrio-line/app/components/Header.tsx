import Image from 'next/image'
import logo from "../../public/Equilibrio-line-logo.png"


export default function Header() {
  return (
    <header className="h-[84px] w-full bg-white flex items-cente justify-between">
      <div className='flex items-center justify-center  font-[adelia]'>
        <Image src={logo}
          width={80}
          height={80}
          alt="Logo Equilibrio Line" />
        <h1>Equlibrio Line</h1>
      </div>
      <nav className="flex items-center justify-end space-x-3">
        <a href="#" className="text-sm font-medium hover:text-gray-900">
          Inicio
        </a>
        <a href="#" className="text-sm font-medium hover:text-gray-900">
          Servicios
        </a>
        <a href="#" className="text-sm font-medium hover:text-gray-900">
          Contacto
        </a>
      </nav>
    </header>
  );
}
