import React from 'react';

function Services() {
	return (
		<section className="py-16 px-6 bg-gray-50">
			<h2 className="text-3xl font-semibold text-center mb-12">Наші послуги</h2>
			<div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
				<div className="p-6 shadow-md rounded-lg bg-white">
					<h3 className="text-xl font-bold mb-2">Трансфер до аеропорту</h3>
					<p>Щоденні поїздки з Києва до аеропорту в Кишиневі без пересадок.</p>
				</div>
				<div className="p-6 shadow-md rounded-lg bg-white">
					<h3 className="text-xl font-bold mb-2">Міжнародні перевезення</h3>
					<p>Поїздки з України до Польщі, Чехії, Німеччини, Словаччини та інших країн.</p>
				</div>
			</div>
		</section>
	);
}

export default Services;
