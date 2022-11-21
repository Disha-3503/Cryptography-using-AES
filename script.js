let mode = "encrypt"

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split('')

const encrypt = (text, key) => {

    let textArray = Array.from(text)
    let length = textArray.length

    for(let i = 0; i < length; i++){

        if(letters.includes(textArray[i])){

            newPosition = (letters.indexOf(textArray[i]) + key) % letters.length
            textArray[i] = letters[newPosition]

        }
    }
    return textArray.join('')
}

const decrypt = (text, key) => {
    
    let textArray = Array.from(text)
    let length = textArray.length

    for(let i = 0; i < length; i++){

        if(letters.includes(textArray[i])){

            newPosition = (letters.indexOf(textArray[i]) - key) % letters.length

            if(newPosition < 0){
                newPosition += letters.length
            }
            textArray[i] = letters[newPosition]
        }

    }

    return textArray.join('')

}

let button = document.querySelector(".b")

let messageTextarea = document.querySelector(".message-textarea")
let keyTextarea = document.querySelector(".key-textarea")
let outputTextarea = document.querySelector(".output-textarea")

button.addEventListener("click", (event) => {

    console.log("Pressed");

    if(mode == "encrypt"){
        outputTextarea.value = encrypt(messageTextarea.value, parseInt(keyTextarea.value))
    }
    else if(mode == "decrypt"){
        outputTextarea.value = decrypt(messageTextarea.value, parseInt(keyTextarea.value))
    }
    
})

let choices = document.querySelector(".choices")

let encryptText = document.querySelector(".encrypt")
let decryptText = document.querySelector(".decrypt")

choices.addEventListener("click", (event) => {

    console.log("pressed");

    if(event.target.innerText == "Encrypt"){
        
        mode = "encrypt"

        if(!encryptText.classList.contains("active")){
            encryptText.classList.toggle("active")
            decryptText.classList.toggle("active")
        }

        messageTextarea.value = ""
        keyTextarea.value = ""
        outputTextarea.value = ""
        
    }
    else if(event.target.innerText == "Decrypt"){
        
        mode = "decrypt"

        if(!decryptText.classList.contains("active")){
            encryptText.classList.toggle("active")
            decryptText.classList.toggle("active")
        }

        messageTextarea.value = ""
        keyTextarea.value = ""
        outputTextarea.value = ""

    }
})