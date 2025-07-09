import React from 'react';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<div className="font-sans text-gray-900">
			<Hero />
			<Benefits />
			<Services />
			<Gallery />
			<ContactForm />
			<Footer />
		</div>
	);
}

export default App;
