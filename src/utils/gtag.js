// Утиліта для відстеження конверсій Google Ads

// Функція для відстеження події конверсії
export const trackConversion = (value = 1.0, currency = "UAH") => {
	// Перевіряємо, чи доступна функція gtag
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", "conversion", {
			send_to: "AW-17531505432/aUjcCKfcopQbEJiW1qdB",
			value: value,
			currency: currency,
		});

		console.log("Conversion tracked:", { value, currency });
	} else {
		console.warn("Google Analytics gtag not available");
	}
};

// Функція для відстеження кліків по контактним кнопкам
export const trackContactClick = (contactMethod, value = 1.0) => {
	// Відстежуємо конверсію
	trackConversion(value, "UAH");

	// Додатково відстежуємо подію кліку
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", "contact_click", {
			contact_method: contactMethod,
			value: value,
			currency: "UAH",
		});
	}
};

// Функція для відстеження перегляду сторінки (якщо потрібно)
export const trackPageView = pageName => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", "page_view", {
			page_title: pageName,
			page_location: window.location.href,
		});
	}
};
