import React, { useEffect, useRef } from 'react';
import { FaTelegramPlane, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { SiViber } from 'react-icons/si'; // Іконка Viber

function ContactModal({ isOpen, onClose }) {
	const modalRef = useRef();

	// Заборонити скрол при відкритій модалці
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => (document.body.style.overflow = 'auto');
	}, [isOpen]);

	// Закрити по кліку за межами модалки
	const handleClickOutside = e => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div
			onClick={handleClickOutside}
			className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4"
		>
			<div
				ref={modalRef}
				className="bg-white rounded-lg max-w-md w-full p-6 text-gray-800 relative shadow-lg"
			>
				<button
					onClick={onClose}
					className="absolute top-2 right-4 text-gray-400 hover:text-black text-2xl"
				>
					&times;
				</button>
				<h2 className="text-xl font-semibold mb-4 text-center">Звʼязатися з нами</h2>
				<div className="grid gap-4 text-center">
					<a
						href="tel:+380688013941"
						className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
					>
						<FiPhone size={20} /> Зателефонувати
					</a>
					<a
						href="viber://chat?number=+380688013941"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
					>
						<SiViber size={20} /> Viber
					</a>
					<a
						href="https://wa.me/380688013941"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
					>
						<FaWhatsapp size={20} /> WhatsApp
					</a>
					<a
						href="https://t.me/Konfort_TRANSS"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
					>
						<FaTelegramPlane size={20} /> Telegram
					</a>
					{/* <a
            href="https://m.me/yourfacebookusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
          >
            <FaFacebookMessenger size={20} /> Messenger
          </a> */}
				</div>
			</div>
		</div>
	);
}

export default ContactModal;
