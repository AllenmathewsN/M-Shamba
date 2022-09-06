const myForm = document.querySelector(".myForm");
console.log(myForm);

myForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log(event.target.children[1].value);

    fetch("http://localhost:3000/items/1").then(response => response.json()).then(data => {
        console.log(data);
    })
})