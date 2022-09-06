const myForm = document.querySelector(".myForm");
console.log(myForm);

myForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log(event.target.children[1].value);
})