import React, { useState } from "react";
import heroImage from "../assets/hero2.jpg";
import ContactModal from "../components/ContactModal";
import { trackContactClick } from "../utils/gtag";

function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div
			className="relative h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
				<h1 className="text-4xl md:text-6xl font-bold">
					Трансферні перевезення
				</h1>
				<h2 className="text-xl mt-4">
					Трансферні перевезення Україна - Європа
				</h2>
				<button
					onClick={() => {
						trackContactClick("booking_button");
						setIsModalOpen(true);
					}}
					className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
				>
					Забронювати поїздку
				</button>
			</div>
			<ContactModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}

export default Hero;
