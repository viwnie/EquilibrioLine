import Image from "next/image";
import ig from "../assets/instagram.svg";
import fb from "../assets/Desafio 3 Facebook.png";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-[#221E1F] px-10 md:px-30 py-[50px] text-white w-full mt-10">
			<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
				<h1 className="font-[adelia] text-xl">Equilibrio Line</h1>
				<span className="text-sm md:text-base">
					Dirección: C/Estación, 27, CP 30500 Molina de Segura (Murcia)
				</span>
				<span className="text-sm md:text-base">Teléfono: +34 613 413 279</span>
				<div className="flex flex-col text-sm md:text-base">
					<span>Lunes a Viernes de 7:00 a 22:00</span>
					<span>Sábados de 8:00 a 13:00</span>
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
				<div className="flex gap-4">
					<Link
						href="https://www.instagram.com/"
						className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center shadow hover:shadow-md transition"
					>
						<Image src={fb} alt="Facebook" width={16} height={16} />
					</Link>
					<Link
						href="https://www.facebook.com/"
						className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center shadow hover:shadow-md transition"
					>
						<Image src={ig} alt="Instagram" width={16} height={16} />
					</Link>
				</div>

				<span className="text-center text-sm md:text-base">
					Developed by:{" "}
					<Link
						className="text-center px-2 text-[#6DC5D2] rounded-full hover:text-[#6BC3A3] transition duration-400"
						href="https://www.linkedin.com/in/viniciodev/"
					>
						Vinicio
					</Link>{" "}
					and{" "}
					<Link
						className="text-center px-2 text-[#6DC5D2] rounded-full hover:text-[#6BC3A3] transition duration-400"
						href="https://www.linkedin.com/in/renndev/"
					>
						Renan
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Footer;
