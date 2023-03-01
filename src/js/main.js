
// pobieramy wszytskie trzy pargarafy (icony) strzałek
const arrowsIcons = document.querySelectorAll('.icons__arrow p')
// pobieramy wszytskie kontenery z informacjami o budowie czasowników
const infoTables = document.querySelectorAll('.table__info__form__text')
// pobieramy wszytskie 3 tabele
const tables = document.querySelectorAll('tbody')
// pobieramy wszytskie wiersze
const words = document.querySelectorAll('th')
// pobieramy trzy ikony plusa
const plusIcons = document.querySelectorAll('.icon__plus')
// pobieramy trzy ikony minusa
const minusIcons = document.querySelectorAll('.icon__minus')

arrowsIcons.forEach(arrow => {
	// nasłuchujemy rodzica icony czyli całego div'a
	arrow.parentElement.addEventListener('click', () => {
		// paragraf jako icona dostaje clase która ją obraca
		arrow.classList.toggle('icons-rotate')

		const arrowIconID = arrow.parentElement.dataset.id

		// if przesyłający odpowiedni parametr do funkcji zalezności od kliknietej sztrałki
		if (arrowIconID === 'one-arrow') {
			keepText('one')
		} else if (arrowIconID === 'two-arrow') {
			keepText('two')
		} else if (arrowIconID === 'three-arrow') {
			keepText('three')
		}
	})
}) //END

// funkcja ukrywająca tekst informacyjny zalezności, która strzałka została kliknieta
const keepText = (number) => {
	infoTables.forEach(infT => {
		const infoData = infT.dataset.name
		
		if(infoData === `info-${number}`) {
			infT.classList.toggle('not__see--text')
			
		}

	})
} // END

// wybór pojedyczego słówka ze wszytskich tabeli
words.forEach(word => {
	word.addEventListener('click', e => {
		e.target.classList.toggle('see--row')
	})
}) // END

// nadanie na icony plusa i uruchomienie funkcji z odpowiednim parametrm
plusIcons.forEach(plusIcon => {
	// przypisanie data-id icon plus
	const plusIconID = plusIcon.dataset.id

	// nasłuchiwanie ikon plus na kliknięcie
	// odpowiednia icona z data-id uruchamia odpowiednią funkcje
	plusIcon.addEventListener('click', () => {
		if (plusIconID === 'one-plus') {
			showWords('one')
		} else if (plusIconID === 'two-plus') {
			showWords('two')
		} else if (plusIconID === 'three-plus') {
			showWords('three')
		}
	})
}) // END

// nasłuchiwanie ikon minusa na kliknięcie
// odpowiednia icona z data-id uruchamia odpowiednią funkcje
minusIcons.forEach(minusIcon => {
	const minusIconID = minusIcon.dataset.id

	minusIcon.addEventListener('click', () => {
		if (minusIconID === 'one-minus') {
			keepWords('one')
		} else if (minusIconID === 'two-minus') {
			keepWords('two')
		} else if (minusIconID === 'three-minus') {
			keepWords('three')
		}
	})
}) // END

// funkcja odkrywająca wszytskie słówka z danej tabeli
const showWords = number => {
	tables.forEach(table => {
		if (table.dataset.name === `table-${number}`) {
			const wordsOne = table.querySelectorAll('.table__word-ang')
			wordsOne.forEach(wordOne => {
				wordOne.classList.add('see--row')
			})
		} else if (table.dataset.name === `table-${number}`) {
			const wordsTwo = table.querySelectorAll('.table__word-ang')
			wordsTwo.forEach(wordTwo => {
				wordTwo.classList.add('see--row')
			})
		} else if (table.dataset.name === `table-${number}`) {
			const wordsThree = table.querySelectorAll('.table__word-ang')
			wordsThree.forEach(wordThree => {
				wordThree.classList.add('see--row')
			})
		}
	})
} // END

// funkcja zakrywająca wszytskie słówka z danej tabeli
const keepWords = number => {
	tables.forEach(table => {
		if (table.dataset.name === `table-${number}`) {
			const wordsOne = table.querySelectorAll('.table__word-ang')
			wordsOne.forEach(wordOne => {
				wordOne.classList.remove('see--row')
			})
		} else if (table.dataset.name === `table-${number}`) {
			const wordsTwo = table.querySelectorAll('.table__word-ang')
			wordsTwo.forEach(wordTwo => {
				wordTwo.classList.remove('see--row')
			})
		} else if (table.dataset.name === `table-${number}`) {
			const wordsThree = table.querySelectorAll('.table__word-ang')
			wordsThree.forEach(wordThree => {
				wordThree.classList.remove('see--row')
			})
		}
	})
} // END

// Zmienna data
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear() //END
