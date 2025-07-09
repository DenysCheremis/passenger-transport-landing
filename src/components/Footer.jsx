import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegramPlane, FaWhatsapp, FaFacebookMessenger, FaViber } from 'react-icons/fa';

function Footer() {
	return (
		<footer className="py-8 px-6 bg-white border-t">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
				<div className="text-sm text-center md:text-left text-gray-700">
					<div className="flex items-center gap-2 justify-center md:justify-start">
						<FiPhone />
						<a href="tel:+380688013941" className="hover:underline">
							+380688013941
						</a>{' '}
						/
						<a href="tel:+380930359224" className="hover:underline">
							+380930359224
						</a>
					</div>
					<div className="flex items-center gap-2 justify-center md:justify-start mt-1">
						<FiMail />
						<a href="mailto:comforttrans999@gmail.com" className="hover:underline">
							comforttrans999@gmail.com
						</a>
					</div>
				</div>

				<div className="flex gap-4 text-xl">
					<a
						href="https://invite.viber.com/?g2=AQBrUeGuk3A5..."
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Viber"
						className="text-[#7360F2]"
					>
						<FaViber />
					</a>
					<a
						href="https://wa.me/380688013941"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
						className="text-[#25D366]"
					>
						<FaWhatsapp />
					</a>
					<a
						href="https://t.me/yourtelegramusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Telegram"
						className="text-[#0088cc]"
					>
						<FaTelegramPlane />
					</a>
					{/* <a
						href="https://m.me/yourfacebookusername"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Messenger"
						className="text-[#0078FF]"
					>
						<FaFacebookMessenger />
					</a> */}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
