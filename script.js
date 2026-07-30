// Swirl Society Cart

let cart = [];


const buttons = document.querySelectorAll(".add-to-cart");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const productCard = button.parentElement;

        const productName = productCard.querySelector("h3").innerText;

        const productPrice = productCard.querySelector("strong").innerText;


        cart.push({
            name: productName,
            price: productPrice
        });


        alert(productName + " added to your order!");

        console.log(cart);

    });

});
