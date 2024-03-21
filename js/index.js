let titleMessage = document.getElementById('title-message'); //title of the "title-message" element
let paragraph = document.getElementById('paragraph'); //paragraph of the "paragraph" element
let image = document.getElementById('image'); //image of the "image" element

function removeSpace(){
    return  document.getElementById("text").value.replace(/(  +)/g, ' ');
} /* Does not allow more than one space between each word*/

function copyText(){
    let copyText = document.getElementById('copy-text'); //text of the "text-copy" element
    let copy = document.getElementById('copy-btn'); 
    copyText.select(); 
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    if(copy.textContent === 'Copy'){
        
        //Cambia a los valores iniciales
        titleMessage.textContent = "No message was found!"; 
        paragraph.textContent = "Enter the text you want to encrypt or decrypt."; 
        image.src = "../assets/search.png";

        document.querySelector("#hide").style.visibility = "visible";
        document.querySelector("#copy-text").style.visibility = "hidden";
        document.querySelector("#copy-btn").style.visibility = "hidden"; 

        
    }
}

function encrypt(){
    let text = document.getElementById('text').value; //text of the "textarea" element
    //Converts all text to lowercase
    text = text.toLowerCase();

    //removes any diacritic (for any language) except if it is a ñ
    text = text.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize();

    //Replace the vocabulary in the text 
    let letter_replace = {
        a: "ai", 
        e: "enter",
        i: "imes", 
        o: "ober", 
        u: "ufat"
    }

    /*
    function in JavaScript; it is used to search a string, for a match, against a regular expression
    */
    let message_encrypt = text.replace(/a|e|i|o|u/g, function(matched){
        return letter_replace[matched]
    }) 

    /*
    /values/: items of search
    g: search global
    */
    
    if(text.length != 0){
        titleMessage.textContent = "Successfully encrypted text"; 
        paragraph.textContent = ""
        image.src = "../assets/programming.png"

        setTimeout(function(){
            document.querySelector("#hide").style.visibility = "hidden";
            document.querySelector("#copy-text").style.visibility = "visible";
            document.querySelector("#copy-btn").style.visibility = "visible";
            document.getElementById("copy-text").value = message_encrypt;
        }, 3000)
    } else {
        titleMessage.textContent = "No message was found!"; 
        paragraph.textContent = "Enter the text you want to encrypt or decrypt."; 
        image.src = "../assets/search.png";
        swal("Something went wrong!","You must enter text", "warning"); 
    }
}

function decrypt(){
    let text = document.getElementById('text').value; //text of the "textarea" element

    //Replace the vocabulary in the text 
    let letter_replace = {
        ai: "a", 
        enter: "e",
        imes: "i", 
        ober: "o", 
        ufat: "u"
    }

    /*
    function in JavaScript; it is used to search a string, for a match, against a regular expression
    */
    let message_decrypt = text.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return letter_replace[matched]
    }) 

    if(text.length != 0){
        titleMessage.textContent = "Successfully decrypted text"; 
        paragraph.textContent = ""
        image.src = "../assets/programmer.png"; 
        setTimeout(function(){
            document.querySelector("#hide").style.visibility = "hidden";
            document.querySelector("#copy-text").style.visibility = "visible";
            document.querySelector("#copy-btn").style.visibility = "visible";
            document.getElementById("copy-text").value = message_decrypt;
        }, 3000);
    }else{
        titleMessage.textContent = "No message was found!"; 
        paragraph.textContent = "Enter the text you want to encrypt or decrypt."; 
        image.src = "../assets/search.png";
        swal("Something went wrong!","You must enter text", "warning"); 
    }
}


