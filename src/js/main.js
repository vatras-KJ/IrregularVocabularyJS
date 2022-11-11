const allAngWord = document.querySelectorAll('.table__word-ang')
const allArrowIcon = document.querySelectorAll('.icons')
const arrowIcon = document.querySelectorAll('.fa-solid')
const textForm = document.querySelectorAll('.table__info__form__text')

for (let word of allAngWord) {
	const seeAngWord = e => {
		e.target.classList.toggle('ang-see')
	}
	word.addEventListener('click', seeAngWord)
}

const seeT0 = () => {
	textForm[0].classList.toggle('text-see')
    arrowIcon[0].classList.toggle('icons-rotate')
}
const seeT1 = () => {
	textForm[1].classList.toggle('text-see')
    arrowIcon[1].classList.toggle('icons-rotate')
}
const seeT2 = () => {
	textForm[2].classList.toggle('text-see')
    arrowIcon[2].classList.toggle('icons-rotate')
}

allArrowIcon[0].addEventListener('click', seeT0)
allArrowIcon[1].addEventListener('click', seeT1)
allArrowIcon[2].addEventListener('click', seeT2)

