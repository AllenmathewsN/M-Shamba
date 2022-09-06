const myForm = document.querySelector(".myForm");
console.log(myForm);

myForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    const userInput = event.target.children[1].value
    console.log(event.target.children[1].value);

    const title = document.querySelector(".title");
    const itemImage = document.querySelector(".itemImage");
    const itemDescription = document.querySelector(".itemDescription");
    const itemPrice = document.querySelector(".itemPrice");


    fetch(`http://localhost:3000/items/${userInput}`).then(response => response.json()).then(data => {
        console.log(data);

        title.innerHTML = data.item_name;
        itemDescription.innerHTML = data.description;
        itemImage.src = data.image_url;
        itemPrice.innerHTML ="Price: " + data.item_price + " Ksh.";

    })
})