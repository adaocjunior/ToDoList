//DOM ITEMS
const textInput = document.getElementById('textInput');
const idk = document.getElementById('idk')
//Variables
let toDoString = '';
let idString = '0123456789';
let itemId = '';

//Array
let allItemIds = []


//Event listener to enter key
textInput.addEventListener("keyup", (event)=>{
    if (event.keyCode === 13){
        toDoString = textInput.value
        textInput.value = ''
        genereateID()
    }
})

function genereateID(){
    for (let i = 0; i < 6; i++){
        itemId += idString[Math.floor(Math.random() * 10)]
        createHtmlItem()
    }
}

function createHtmlItem(){
    if (toDoString != ''){
    idk.innerHTML = `
    <span id=${itemId}>${toDoString}</span>`
    itemId = ''
    }
}
