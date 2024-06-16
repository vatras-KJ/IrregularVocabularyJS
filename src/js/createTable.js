const tableSection = document.querySelector('.table__section')
const cTable = document.createElement('table')
const cTablehead = document.createElement('thead')
const cTableBody = document.createElement('tbody')


tableSection.appendChild(cTable)
cTable.appendChild(cTablehead)
cTable.appendChild(cTableBody)

const createTableHead = () => {
	const tableHeadText = tableHead.text
	const headRow = document.createElement('tr')
	cTablehead.appendChild(headRow)

	const headColumnName = document.createElement('th')
	headColumnName.innerText = 'czasownik'
	headColumnName.colSpan = 3
	headRow.appendChild(headColumnName)

	for (let numberText = 0; numberText <= tableHeadText.length - 1; numberText++) {
		const headColumn = document.createElement('th')
		headColumn.innerHTML = tableHeadText[numberText]
		headColumn.className = 'table__head__text'
		headRow.appendChild(headColumn)
	}
}

const levelSetting = (titleRow, wordLevel) => {
	if (wordLevel === 1) {
		titleRow.setAttribute('data-level', 'simple')
		titleRow.classList.add('colorSimple')
	} else if (wordLevel === 2) {
		titleRow.setAttribute('data-level', 'medium')
		titleRow.classList.add('colorMedium')
	} else if (wordLevel === 3) {
		titleRow.setAttribute('data-level', 'hard')
		titleRow.classList.add('colorHard')
	}
}

const createTable = (wordsTitle, wordForms, wordLevel) => {
	const titleRow = document.createElement('tr')
	cTableBody.appendChild(titleRow)

	const titleColumn = document.createElement('th')
	titleColumn.colSpan = 3
	titleColumn.className = 'table__word-pl'
	titleColumn.innerHTML = wordsTitle
	titleRow.appendChild(titleColumn)

	levelSetting(titleRow, wordLevel)

	createWordTable(wordForms, titleRow)
}

const createWordTable = (wordForms, wordsRow) => {
	cTableBody.appendChild(wordsRow)

	wordForms.forEach(word => {
		const wordsColumn = document.createElement('th')
		wordsColumn.className = 'table__word-ang'
		wordsColumn.innerHTML = word
		wordsRow.appendChild(wordsColumn)
	})
}

const dataObjectTable = listWords => {
	let wordsTitle = listWords.title
	let wordForms = listWords.forms
	let wordLevel = listWords.level

	createTable(wordsTitle, wordForms, wordLevel)
}

const startCreate = () => {
	createTableHead()

	for (let number = 0; number <= listWordsObject.length; number++) {
		let listWords = listWordsObject[number]
		dataObjectTable(listWords)
	}
}


document.addEventListener('DOMContentLoaded', startCreate)
