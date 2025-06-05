import React from 'react';

function Benefits() {
  const benefits = [
    { title: 'Надійність', desc: 'Виїзди за чітким графіком, без затримок. Ми завжди прибуваємо вчасно.' },
    { title: 'Комфорт', desc: 'Сучасні мікроавтобуси з кондиціонером, Wi-Fi та зручними сидіннями.' },
    { title: 'Доступна ціна', desc: 'Прямі маршрути без пересадок — за помірну ціну, без прихованих доплат.' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Чому обирають нас</h2>
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {benefits.map((b, i) => (
          <div key={i} className="shadow-md p-6 rounded-lg bg-white">
            <h3 className="text-xl font-bold mb-2">{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;