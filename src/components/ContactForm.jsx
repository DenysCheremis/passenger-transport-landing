import React from 'react';
import { FiPhone } from "react-icons/fi";
import { FaTelegramPlane, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12">Зв'язатися з нами</h2>
      <div className="max-w-2xl mx-auto grid gap-6 md:grid-cols-2 text-center">
        <a
          href="tel:+380631234567"
          className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow text-lg"
        >
          <FiPhone size={24} /> Зателефонувати
        </a>
        <a
          href="https://t.me/yourtelegramusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow text-lg"
        >
          <FaTelegramPlane size={24} /> Telegram
        </a>
        <a
          href="https://wa.me/380631234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow text-lg"
        >
          <FaWhatsapp size={24} /> WhatsApp
        </a>
        <a
          href="https://m.me/yourfacebookusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg shadow text-lg"
        >
          <FaFacebookMessenger size={24} /> Messenger
        </a>
      </div>
    </section>
  );
}

export default ContactForm;
