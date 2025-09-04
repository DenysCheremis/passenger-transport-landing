import React from "react";
import {
	FaTelegramPlane,
	FaWhatsapp,
	FaFacebookMessenger,
	FaViber,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function ContactForm() {
	return (
		<section className="py-16 px-6 bg-gray-50">
			<h2 className="text-3xl font-semibold text-center mb-12">
				Звʼязатися з нами
			</h2>
			<div className="max-w-2xl mx-auto grid gap-6 text-center sm:grid-cols-2">
				<a
					href="tel:+380688013941"
					className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg"
				>
					<FiPhone size={24} /> Зателефонувати
				</a>
				<a
					href="viber://chat?number=%2B380688013941"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg"
				>
					<FaViber size={24} /> Viber
				</a>
				<a
					href="https://wa.me/380688013941"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg"
				>
					<FaWhatsapp size={24} /> WhatsApp
				</a>
				<a
					href="https://t.me/Konfort_TRANSS"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg"
				>
					<FaTelegramPlane size={24} /> Telegram
				</a>
				{/* <a
					href="https://m.me/yourfacebookusername"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-lg sm:col-span-2"
				>
					<FaFacebookMessenger size={24} /> Messenger
				</a> */}
			</div>
		</section>
	);
}

export default ContactForm;
