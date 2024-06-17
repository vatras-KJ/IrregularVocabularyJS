let btnsInfoForm
let infoFormBox
let btnsShowLevel
let btnsSet
let angWordsText

const main = () => {
	prepareDOMElement()
	prepareDOMEvents()
}

const prepareDOMElement = () => {
	btnsInfoForm = document.querySelectorAll('.table__info__form-title')
	infoFormBox = document.querySelectorAll('.table__info__form__text-box')
	btnsShowLevel = document.querySelectorAll('.btn-level')
	btnsSet = document.querySelectorAll('.btn-set')
	angWordsText = document.querySelectorAll('.table__word-ang')
}

const prepareDOMEvents = () => {
	btnsInfoForm.forEach(btnInfo => {
		btnInfo.addEventListener('click', showOffInfoForms)
	})

	btnsShowLevel.forEach(btnShowLevel => {
		btnShowLevel.addEventListener('click', checkBnt)
	})

	btnsSet.forEach(btnSet => {
		btnSet.addEventListener('click', setTableWords)
	})

	singleSetHideWord()
}

// ########################################################
// ustawienia sekcji z opisem form czasowników
function showOffInfoForms() {
	const iconsPlusInfoForm = this.querySelector('.fa-plus')
	const iconsMinusInfoForm = iconsPlusInfoForm.nextElementSibling

	iconsPlusInfoForm.classList.toggle('off')
	iconsMinusInfoForm.classList.toggle('off')

	this.nextElementSibling.classList.toggle('off')
} //END

// ########################################################
// ustawienia widoczności grup czasowników zależności od levelu 
const showOffWords = (attributeBtnLevelOff, btnTarget) => {
	const words = document.querySelectorAll('tr')
	words.forEach(wordItem => {
		let attributeWord = wordItem.getAttribute('data-level')

		if (attributeWord == attributeBtnLevelOff) {
			wordItem.classList.toggle('off')
			btnTarget.innerText = `pokaż poziom ${attributeWord}`

			if (!wordItem.classList.contains('off')) {
				btnTarget.innerText = `ukryj poziom ${attributeWord}`
			}
		}
	})
}

const checkBnt = e => {
	let btnTarget = e.target
	let attributeBtnLevelOff = btnTarget.getAttribute('data-show')

	showOffWords(attributeBtnLevelOff, btnTarget)
} //END

// ########################################################
// ustawienia ukrywania/pokazywania angielskich czasowników (pojedynczo)
const singleSetHideWord = () => {
	angWordsText.forEach(angWord => {
		angWord.addEventListener('click', () => {
			angWord.classList.toggle('hide')
		})
	})
} //END

// ########################################################
// ustawienia koloru i ukrywania/pokazywania angielskich czasowników (całościowo)
const wordTextHide = () => {
	const angWordsTextHide = document.querySelectorAll('.hide')

	angWordsText.forEach(angWord => {
		if (angWordsTextHide.length == 0) {
			angWord.classList.add('hide')
		} else if (angWordsTextHide.length > 0) {
			angWord.classList.remove('hide')
		}
	})
}

const colorChange = () => {
	const trsTable = document.querySelectorAll('tbody tr')

	trsTable.forEach(trTabel => {
		const setTr = trTabel.getAttribute('data-level')

		if (setTr == 'simple') {
			trTabel.classList.toggle('colorSimple')
		} else if (setTr == 'medium') {
			trTabel.classList.toggle('colorMedium')
		} else if (setTr == 'hard') {
			trTabel.classList.toggle('colorHard')
		}
	})
}

function setTableWords() {
	const btnSetAttribute = this.getAttribute('data-set')

	if (btnSetAttribute == 'color') {
		colorChange()
	} else if (btnSetAttribute == 'hide') {
		wordTextHide()
	}
} //END

document.addEventListener('DOMContentLoaded', main)