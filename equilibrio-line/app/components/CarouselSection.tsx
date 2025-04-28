"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Image from "next/image";
// import EquilibrioExemplo from "../../public/carousel/equilibrio-line-ejemplo.png"
import Autoplay from "embla-carousel-autoplay";
const images = [
	{
		image: img1,
		author: "idkidkidk",
		title: "ren and tati",
		des: "I try to live black and white but im so blue",
	},
	{
		image: img2,
		author: "idkidkidk",
		title: "ren and tati",
		des: "I try to live black and white but im so blue",
	},
	{
		image: img3,
		author: "idkidkidk",
		title: "ren and tati",
		des: "I try to live black and white but im so blue",
	},
	{
		image: img4,
		author: "idkidkidrrsak",
		title: "ren and tati",
		des: "I try to live black and white but im so blue",
	},
];

export default function CarouselSection() {
	return (
		<div className="w-full flex pt-20">
			<div className="flex-1 pr-8 justify-center items-center flex ml-10">
				<h1 className="text-6xl font-bold">shes screaming in my head uuuh</h1>
			</div>
			<Carousel
				plugins={[
					Autoplay({
						delay: 8000,
					}),
				]}
				className="relative w-[60%] max-w-[100vw] overflow-hidden"
			>
				<CarouselContent>
					{images.map((i, index) => (
						<CarouselItem key={index}>
							<div className="">
								<div className="relative w-full h-[calc(100vh-4rem)]">
									<Image
										src={i.image}
										fill={true}
										objectFit="cover"
										alt="Picture of the author"
										className="object-cover"
									/>
									<div className="absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] -translate-x-1/2 pr-[30%] text-white [text-shadow:_0_5px_10px_rgba(0,0,0,0.25)]">
										<div className="text-2xl font-bold mb-2 animate-fade-up animate-once animate-duration-[2000ms] animate-ease-out">
											{i.author}
										</div>
										<div className="text-5xl font-bold mb-4">{i.title}</div>
										<div className="text-3xl font-semibold mb-6">{i.des}</div>
										<div className="text-lg mb-8">
											Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
											sequi, rem magnam nesciunt minima placeat, itaque eum neque
											officiis unde, eaque optio ratione aliquid assumenda facere ab
											et quasi ducimus aut doloribus non numquam. Explicabo,
											laboriosam nisi reprehenderit tempora at laborum natus unde.
											Ut, exercitationem eum aperiam illo illum laudantium?
										</div>
										<div className="flex gap-4">
											<button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
												SEE MORE
											</button>
											<button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors">
												SUBSCRIBE
											</button>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{images.length > 1 && (
					<>
						<CarouselPrevious className="left-4 z-10 cursor-pointer bg-white/30 hover:bg-white/50 transition-colors" />
						<CarouselNext className="right-4 z-10 cursor-pointer bg-white/30 hover:bg-white/50 transition-colors" />
					</>
				)}
			</Carousel>
		</div>
	);
}
