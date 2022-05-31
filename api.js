let enter_btn = document.querySelector(".btn");
let card = document.querySelector(".card");
let copy_btn = document.querySelector(".copy-btn");

enter_btn.addEventListener("click", getFacts);
copy_btn.addEventListener("click", () => {
    copyText();
})

function getFacts(){
    let input = document.querySelector(".input").value;
    let card_title = document.querySelector(".card-title");
    let card_text = document.querySelector(".card-text");

    if(input !== ""){
    //card.classList.remove ("d-none");
    
    fetch(`http://numbersapi.com/${input}`)
        .then(response => response.text())
        .then(data => {
            card_title.innerHTML = input;
            card_text.innerHTML = data;
        })
        .catch(e => console.log(e));
    }
}

function copyText(){
    const textarea = document.createElement("textarea");
    let card_text = document.querySelector(".card-text").innerHTML;

    textarea.value = card_text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Fato copiado!");
}