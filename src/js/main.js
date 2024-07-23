const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie-btn')
const disclaimerBtn = document.querySelector('.disclaimer-btn')
const disclaimerText = document.querySelector('.disclaimer-text')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	if (cookieEaten) {
		cookieBox.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide-cookies')
}

const handleCookieBoxDisclaimer = () => {
	disclaimerText.classList.toggle('hide-cookies')
}

const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

cookieBtn.addEventListener('click', handleCookieBox)
disclaimerBtn.addEventListener('click', handleCookieBoxDisclaimer)

showCookie()
handleCurrentYear()