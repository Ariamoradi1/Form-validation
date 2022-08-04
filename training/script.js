let $ = document

let inputTextElem = $.querySelector('.textInput')
let inputPasswordElem = $.querySelector('.passwordInput')
let pElem = $.querySelector('.pTag')

let buttonElem = $.querySelector('.button')

buttonElem.addEventListener('click', function () {


if (inputTextElem.value.length < 8) {

pElem.innerHTML = 'your username must be more than 8 character'
pElem.style.color = 'red'


} else {


 pElem.innerHTML = 'thats right user!'
 pElem.style.color = 'green'

}

if (inputPasswordElem.value.length < 12) {

    pElem.innerHTML = 'your Password must be more than 12 character'
    pElem.style.color = 'red'
    
    
    } else {
    
    
            pElem.innerHTML = 'thats right user!'
            pElem.style.color = 'green'
    
    }



})
