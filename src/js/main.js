// POBRANE ELEMENTY
const elementArrowIcon = document.querySelectorAll('.icons__arrow')
const elementPlusIcon = document.querySelectorAll('.icon__plus')
const elementMinusIcon = document.querySelectorAll('.icon__minus')
const arrowIcons = document.querySelectorAll('.icons__arrow p')

const titleForms = document.querySelectorAll('.table__info__form__title')
const textForms = document.querySelectorAll('.table__info__form__text')

const allAngWord = document.querySelectorAll('.table__word-ang')

const angSeeNoOne = document.querySelectorAll('.ang__see-no--one')
const angSeeNoTwo = document.querySelectorAll('.ang__see-no--two')
const angSeeNoThree = document.querySelectorAll('.ang__see-no--three')

const angSeeOne = document.querySelectorAll('.ang__see--one')
const angSeeTwo = document.querySelectorAll('.ang__see--two')
const angSeeThree = document.querySelectorAll('.ang__see--three')

// FUNKCJE DLA ROZWIJANEGO TEKSTU
const seeText0 = () => {
	textForms[0].classList.toggle('text-see')
	titleForms[0].classList.toggle('title-margin')
	titleForms[0].classList.toggle('title-margin-second')
	arrowIcons[0].classList.toggle('icons-rotate')
}
const seeText1 = () => {
	textForms[1].classList.toggle('text-see')
	titleForms[1].classList.toggle('title-margin')
	titleForms[1].classList.toggle('title-margin-second')
	arrowIcons[1].classList.toggle('icons-rotate')
}
const seeText2 = () => {
	textForms[2].classList.toggle('text-see')
	titleForms[2].classList.toggle('title-margin')
	titleForms[2].classList.toggle('title-margin-second')
	arrowIcons[2].classList.toggle('icons-rotate')
}

elementArrowIcon[0].addEventListener('click', seeText0)
elementArrowIcon[1].addEventListener('click', seeText1)
elementArrowIcon[2].addEventListener('click', seeText2)

// FUNKCJA DO POJEDYNCZYCH SŁÓW 
for (let word of allAngWord) {
	const seeAngWord = (e) => {
		if(e.target.classList.contains('ang__see--one') || e.target.classList.contains('ang__see-no--one')) {
			e.target.classList.toggle('ang__see--one')
			e.target.classList.toggle('ang__see-no--one')
		} else if (e.target.classList.contains('ang__see--two') || e.target.classList.contains('ang__see-no--two')) {
			e.target.classList.toggle('ang__see--two')
			e.target.classList.toggle('ang__see-no--two')
		} else if (e.target.classList.contains('ang__see--three') || e.target.classList.contains('ang__see-no--three')) {
			e.target.classList.toggle('ang__see--three')
			e.target.classList.toggle('ang__see-no--three')
		}
	}

	word.addEventListener('click', seeAngWord)
}

// FUNKCJA DO ZBIOROWYCH SŁÓW 
const seeWordOne = () => {
	angSeeNoOne.forEach(wordOne => {
		if (wordOne.classList.contains('ang__see-no--one')) {
			wordOne.classList.toggle('ang__see--one')
			wordOne.classList.toggle('ang__see-no--one')
		}
	})
}

const noSeeWordOne = () => {
	const angSeeOne = document.querySelectorAll('.ang__see--one')
	angSeeOne.forEach(wordOneNo => {
		if (wordOneNo.classList.contains('ang__see--one')) {
			wordOneNo.classList.toggle('ang__see--one')
			wordOneNo.classList.toggle('ang__see-no--one')
		}
	})
}

const seeWordTwo = () => {
	angSeeNoTwo.forEach(wordTwo => {
		if (wordTwo.classList.contains('ang__see-no--two')) {
			wordTwo.classList.toggle('ang__see--two')
			wordTwo.classList.toggle('ang__see-no--two')
		}
	})
}

const noSeeWordTwo = () => {
	const angSeeTwo = document.querySelectorAll('.ang__see--two')
	angSeeTwo.forEach(wordTwoNo => {
		if (wordTwoNo.classList.contains('ang__see--two')) {
			wordTwoNo.classList.toggle('ang__see--two')
			wordTwoNo.classList.toggle('ang__see-no--two')
		}
	})
}

const seeWordThree = () => {
	angSeeNoThree.forEach(wordThree => {
		if (wordThree.classList.contains('ang__see-no--three')) {
			wordThree.classList.toggle('ang__see--three')
			wordThree.classList.toggle('ang__see-no--three')
		}
	})
}

const noSeeWordThree = () => {
	const angSeeThree = document.querySelectorAll('.ang__see--three')
	angSeeThree.forEach(wordThreeNo => {
		if (wordThreeNo.classList.contains('ang__see--three')) {
			wordThreeNo.classList.toggle('ang__see--three')
			wordThreeNo.classList.toggle('ang__see-no--three')
		}
	})
}

elementPlusIcon[0].addEventListener('click', seeWordOne)
elementMinusIcon[0].addEventListener('click', noSeeWordOne)

elementPlusIcon[1].addEventListener('click', seeWordTwo)
elementMinusIcon[1].addEventListener('click', noSeeWordTwo)

elementPlusIcon[2].addEventListener('click', seeWordThree)
elementMinusIcon[2].addEventListener('click', noSeeWordThree)


// Zmienna data
const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()