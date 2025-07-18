import React, { useState } from 'react';
import heroImage from '../assets/hero.jpg';
import ContactModal from '../components/ContactModal';

function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div
			className="relative h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
				<h1 className="text-4xl md:text-6xl font-bold">Пасажирські перевезення</h1>
				<p className="text-xl mt-4">Міжнародні перевезення з України</p>
				<button
					onClick={() => setIsModalOpen(true)}
					className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
				>
					Забронювати поїздку
				</button>
			</div>
			<ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</div>
	);
}

export default Hero;

// import React, { useState } from 'react';
// import ContactModal from './ContactModal';

// function Hero() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/hero.jpg')` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold">Пасажирські перевезення</h1>
//         <p className="text-xl mt-4">Міжнародні перевезення з України</p>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//         >
//           Забронювати поїздку
//         </button>
//       </div>

//       <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }

// export default Hero;
