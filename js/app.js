"use strict"

const encryptorBox = document.querySelector("#encryptorBox");
const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");
const resultsBox = document.querySelector("#resultsBox");
const copyBtn = document.querySelector("#copyBtn");
const errorText = document.querySelector("#errorMsg");
const defaultInfo = document.querySelector("#defaultInfo");
const resultsArea = document.querySelector("#resultsArea");

encryptBtn.onclick = encryptText;
decryptBtn.onclick = decryptText;
copyBtn.onclick = makeCopy;

encryptorBox.focus();

function encryptText(){
    let inputValue = encryptorBox.value;

    

    //No hacer nada si el input está vacío
    if(inputValue == ""){
        encryptorBox.focus();
        return inputValue;
    }

    if(validateText(inputValue)){

        //Reemplazar todas las vocales con sus respectivos valores
        let encryptedText = inputValue.replace(/a|e|i|o|u/g, function(word){
            if (word == "a") {
                word = "ai"
            }

            if(word == "e") {
                word = "enter"
            }

            if(word == "i") {
                word = "imes"
            }

            if(word == "o") {
                word = "ober"
            }

            if(word == "u") {
                word = "ufat"
            }
            
            return word;
        });

        errorText.classList.add("hide");

        //Enviar resultados a la vista
        showResults(encryptedText);

        //Resetear valor del textarea
        encryptorBox.value = "";

        //Enfocar al textarea
        encryptorBox.focus();

    } else {
        errorText.textContent = "Verifique que no haya usado mayúsculas, números o carácteres especiales";
        errorText.classList.remove("hide");
    }
    
}

function decryptText(){
    let inputValue = encryptorBox.value;

    if(validateText(inputValue)){

        //Reemplazar todas las palabras con sus respectivos valores
        let decodedText = inputValue.replace(/ai|enter|imes|ober|ufat/g, function(word){
            if (word == "ai") {
                word = "a"
            }

            if(word == "enter") {
                word = "e"
            }

            if(word == "imes") {
                word = "i"
            }

            if(word == "ober") {
                word = "o"
            }

            if(word == "ufat") {
                word = "u"
            }
            
            return word;
        });

        errorText.classList.add("hide");

        //Enviar resultados a la vista
        showResults(decodedText);

    } else {
        errorText.textContent = "Verifique que no haya usado mayúsculas, números o carácteres especiales";
        errorText.classList.remove("hide");
    }
}

function showResults(data){
    defaultInfo.classList.add("hide");
    resultsArea.classList.remove("hide");
    
    resultsBox.value = data;
}

function makeCopy(){
    let clipboardData = resultsBox.value;

    //Usar el objeto navigator en su propiedad clipboard para copiar el texto
    navigator.clipboard.writeText(clipboardData);

    
    copyBtn.textContent = "Copiado";
    copyBtn.classList.add("green");

    //Cambiar estilo del boton copiar
    setTimeout(function(){
        copyBtn.classList.remove("green");
        copyBtn.textContent = "Copiar";
    }, 300)
}

