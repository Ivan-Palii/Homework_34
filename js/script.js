"use strict";

/*
*
// 1 1. Є HTML-форма:

// Після натискання на кнопку,
// виконайте обмін вмістом між двома інпутами.
// Під час повторного натискання знову змінити вміст інпутів

/*const form = document.forms.form
const inp1 = form.input1;
const inp2 = form.input2;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	[inp1.value,inp2.value] = [inp2.value,inp1.value]
})*/

// 2 2. Є HTML-форма:
// При натисканні Заблокувати кнопка блокує
// інпут за допомогою атрибута disabled, а інша розблоковує.

/*const form = document.forms[0]

form.onsubmit = (e) => {
	e.preventDefault()

	if (e.submitter.name === 'lock')
		e.target.children[0].disabled = true
	else if (e.submitter.name === 'unlock')
		e.target.children[0].disabled = false

}*/

// 3 3. Є HTML-форма:

// Напишіть код, який під час натискання на лінк заповнюватиме інпут значенням з атрибута href.
// ! Розмітку не можна.

/*const form = document.forms[0]

form.addEventListener('click', (e) => {

	if (e.target.closest('a'))
		e.currentTarget.children[0].value = e.target.closest('a').href


	e.preventDefault()
})*/

// 4 4. Є HTML-форма:

// Напишіть скрипт, який під час натискання на кнопку
// отримуватиме текст із багаторядкового текстового поля,
// підраховуватиме статистику (приклад вище) і результат виводитиме в div

/*
const form = document.forms.form

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const text = e.target.elements.textarea.value

	const vowels = ['a', 'e', 'i', 'o', 'u', 'w', 'y'];

	const result = {
		spaces: 0,
		consonants: 0,
		vowels: 0,
	}

	text.split('').forEach(ch => {
		if (ch === ' ')
			result.spaces++
		else if (vowels.includes(ch))
			result.vowels++
		else
			result.consonants++
	})
	form.nextElementSibling.innerHTML = `Spaces: ${result.spaces} Consonants: ${result.consonants} Vowels: ${result.vowels}`

})

*/

// 5  Є HTML-форма:

// Ваше завдання - завантажити картинку і по кліку на кнопку
// вивести її в HTML. Якщо картинка не вибрана - вивести
// повідомлення: "You should upload an image". Також має
// бути кнопка видалення картинки. Гарно стилізувати (згадаєте, що таке css)
// const fileUrl = URL.createObjectURL(file)

/*const form = document.forms.form

const fileInput = form.file


form.addEventListener('submit', (e) => {
	e.preventDefault()

	switch (e.submitter.name) {
		case 'deleteImg': {
			removeNodesIfExisted()
			clearFile()
			break
		}
		case 'loadPreview': {
			const files = fileInput.files

			removeNodesIfExisted()

			if (files.length) {
				createImg(files[0])
			} else {
				createWarning()
			}

			break
		}
	}
})

function createImg(file) {
	const imgFile = file
	const img = document.createElement('img')
	img.id = "uploadedImg"
	img.src = window.URL.createObjectURL(imgFile)
	img.onload = function () {
		window.URL.revokeObjectURL(this.src)
	}
	clearFile()
	document.querySelector('.wrapperImg').append(img)
}

function clearFile() {
	fileInput.value = ''
}

function removeNodesIfExisted() {
	document.querySelector('#uploadedImg')?.remove()
	document.querySelector('#errorMsg')?.remove()

}


function createWarning() {
	const warning = document.createElement('h3')
	warning.id = 'errorMsg'
	warning.textContent = "You need to select an image!!!"

	document.querySelector('.wrapperImg').append(warning)
}*/


//6. Завдання зі статті: https://uk.javascript.info/form-elements

/*const selectElem = document.querySelector('#genres')

const newOption = document.createElement('option')

newOption.value = 'classic'
newOption.textContent = 'Класика'
newOption.selected = true


console.log(selectElem.value)
selectElem.append(newOption)*/

//7. Завдання зі статті: https://uk.javascript.info/focus-blur
//7.1
/*
const textareaDiv = document.querySelector('.textareaDiv')
const textarea = document.createElement('textarea')
textarea.classList.add('textareaDiv')
textarea.value = ''
textareaDiv.innerHTML = ''

const event = (e) => {
	console.log(e)
	if (!(e instanceof KeyboardEvent) || e.key === 'Enter') {
		textareaDiv.innerHTML = textarea.value
		textarea.parentNode.replaceChild(textareaDiv, textarea)
		e.stopImmediatePropagation()
	}

}

textareaDiv.addEventListener('click', () => {

	textarea.value = textareaDiv.innerHTML
	textareaDiv.parentNode.replaceChild(textarea, textareaDiv)
	textarea.focus()
})

textarea.addEventListener('focusout', event)
textarea.addEventListener('keydown', event)*/


//7.2

/*const table = document.querySelector('#bagua-table')
const textarea = document.createElement('textarea')
textarea.style.width = '100%'
textarea.style.height = '100%'
textarea.style.resize = 'none'
textarea.style.border = 'none'
const btnBlock = document.createElement('div')
btnBlock.style.position = 'absolute'
const confirmBtn = document.createElement('button')
confirmBtn.textContent = 'Згода'
confirmBtn.name = 'confirmBtn'
const denyBtn = document.createElement('button')
denyBtn.textContent = 'Відміна'
denyBtn.name = 'denyBtn'

btnBlock.append(confirmBtn, denyBtn)


let globalTdElem = ''
let globalTdElemInnerHtml = ''
let redacting = false

const removeTextBlock = () => {
	textarea.remove()
	btnBlock.remove()
	globalTdElem.classList.toggle('redacting_td')
	redacting = false
}

const confirmFunc = () => {
	globalTdElem.innerHTML = textarea.value
	removeTextBlock()
}

const denyFunc = () => {
	globalTdElem.innerHTML = globalTdElemInnerHtml
	removeTextBlock()
}


btnBlock.addEventListener('click', (e) => {
	const btn = e.target.closest('button')
	switch (btn?.name) {
		case 'confirmBtn': {
			confirmFunc()
			break;
		}
		case 'denyBtn': {
			denyFunc()
			break;
		}
		default:
			console.log(`btn: ${btn}`)
	}
})

const tableDataFunc = (e) => {
	const tdElem = e.target.closest('TD')
	redacting = true
	globalTdElem = tdElem
	textarea.value = globalTdElemInnerHtml = globalTdElem.innerHTML
	globalTdElem.innerHTML = ''
	globalTdElem.classList.toggle('redacting_td')
	globalTdElem.append(textarea, btnBlock)
	textarea.focus()
}


table.addEventListener('click', (e) => {
	if (e.target.closest('TD') && !redacting)
		tableDataFunc(e)
})*/

// 7.3

/*const mouse = document.querySelector('#mouse')

mouse.tabIndex = '0'
mouse.style.userSelect = 'none'
mouse.style.position = 'fixed'


const moveMouse = (x, y) => {
	const rect = mouse.getBoundingClientRect()
	mouse.style.top = `${rect.top + y}px`
	mouse.style.left = `${rect.left + x}px`
}

mouse.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
		case 'KeyW' : {
			moveMouse(0, -10)
			break;
		}
		case 'ArrowDown':
		case 'KeyS': {
			moveMouse(0, 10)
			break;
		}
		case 'ArrowRight':
		case 'KeyD': {
			moveMouse(10, 0)
			break;
		}
		case 'ArrowLeft':
		case 'KeyA': {
			moveMouse(-10, 0)
			break;
		}
		default:
			console.log(e.code)
	}
})*/


//8. Завдання зі статті: https://uk.javascript.info/events-change-input


/*const form = document.forms.calculator
const diagram = document.querySelector('#diagram')
const moneyBefore = diagram.querySelector('#money-before')
const moneyAfter = diagram.querySelector('#money-after')
const moneyAfterBar = document.querySelector('#height-after')


const changeBeforeValue = value => {
	moneyBefore.textContent = value
}

const changeAfterBar = () => {
	moneyAfterBar.style.height = `${moneyAfter.textContent / moneyBefore.textContent * 100}px`
}

const changeAfterValue = value => {
	moneyAfter.textContent = value
	changeAfterBar()
}

const calcMoney = () => {
	const initial = +form.money.value
	const interest = +form.interest.value / 100
	const years = +form.months.value / 12

	const result = Math.round(initial * (1 + interest) ** years)
	changeAfterValue(result)
}


const listener = (e) => {
	if (e.target.name === 'money')
		changeBeforeValue(e.target.value)

	calcMoney()
}

form.addEventListener('change', listener)
form.addEventListener('input', listener)

changeBeforeValue(form.money.value)
calcMoney()*/

//9. Завдання зі статті: https://uk.javascript.info/forms-submit*/

const formWrapper = document.querySelector('#prompt-form-container')
formWrapper.style.display = 'none'

const activateFormBtn = document.querySelector('#activate-form-btn')

function showPrompt(messageForUser, callback) {
	const form = document.forms[0]
	const text = form.elements.text
	const cancel = form.elements.cancel
	const message = document.querySelector('#prompt-message')
	message.innerHTML = messageForUser
	formWrapper.style.display = 'block'
	text.value = ''
	text.focus()

	form.onsubmit = function (e) {
		e.preventDefault()
		checkTextInput()
	}

	document.onkeydown = function (e) {
		if (e.code === 'Escape')
			complete(null)
	}

	text.onkeydown = function (e) {
		if (e.code === 'Tab' && e.shiftKey) {
			e.preventDefault()
			cancel.focus()
		}
	}

	cancel.onkeydown = function (e) {
		if (e.code === 'Tab' && !e.shiftKey) {
			e.preventDefault()
			text.focus()
		}
	}

	cancel.onclick = function () {
		complete(null)
	}

	function checkTextInput() {
		if (!!text.value)
			complete(text.value)
	}

	function complete(messageToShow) {
		callback(messageToShow)
		formWrapper.style.display = 'none'
	}
}

activateFormBtn.onclick = function () {
	showPrompt("Введіть щось<br>...розумне :)", function (value) {
		alert("Ви ввели: " + value);
	});
};





























































