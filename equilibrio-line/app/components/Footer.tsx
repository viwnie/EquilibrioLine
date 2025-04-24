import Image from "next/image";
import ig from "../assets/instagram.svg";
import fb from "../assets/Desafio 3 Facebook.png";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-[#221E1F] px-4 py-[30px] text-white w-full mt-30">
			<div className="flex justify-evenly mt-3">
				<h1 className="font-[adelia]">Equlibrio Line</h1>
				<span>Direccion: C/Estación, 27, CP 30500 Molina de Segura (Murcia)</span>
				<span>Teléfono: +34 613 413 279</span>
				<div className="flex flex-col gap-2">
					<span>Lunes a Viernes de 7:00 a 22:00</span>
					<span>Sábados de 8:00 a 13:00</span>
				</div>
			</div>

			<div className="flex mt-10 gap-42">
				<div className="flex gap-2 ml-20">
					<Link
						href="https://www.instagram.com/"
						className="rounded-full bg-white w-[20px] h-[20px] flex justify-center items-center shadow-[0px_10px_15px_rgba(0,0,0,0.1)] hover:shadow-md transition"
					>
						<Image src={fb} alt="Logo Equilibrio Line" />
					</Link>
					<Link
						href="https://www.facebook.com/"
						className="rounded-full bg-white w-[20px] h-[20px] flex justify-center items-center shadow-[0px_10px_15px_rgba(0,0,0,0.1)] hover:shadow-md transition"
					>
						<Image
							src={ig}
							alt="Logo Equilibrio Line"
							className="rounded-full bg-white flex justify-center items-center shadow-[0px_10px_15px_rgba(0,0,0,0.1)] hover:shadow-md transition"
						/>
					</Link>
				</div>
				<div className="">
					<span>
						Developed by:{" "}
						<Link
							className="text-green-300"
							href="https://www.linkedin.com/in/viniciodev/"
						>
							Vinicio
						</Link>{" "}
						and{" "}
						<Link
							className="text-green-300"
							href="https://www.linkedin.com/in/renndev/"
						>
							Renan
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
