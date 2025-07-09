import React from 'react';

function Footer() {
	return (
		<footer className="py-8 px-6 bg-white border-t">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="text-sm">
					Phone: (123) 456-7890
					<br />
					Email: support@example.com
				</div>
				<div className="flex gap-4 mt-4 md:mt-0">
					<a href="#" className="text-gray-600 hover:text-black">
						Telegram
					</a>
					<a href="#" className="text-gray-600 hover:text-black">
						WhatsApp
					</a>
					<a href="#" className="text-gray-600 hover:text-black">
						Massanger
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
