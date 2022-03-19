$(document).ready(function(){
    $("#myButton").click(function(){
        $("#form1").toggle();
    });
});

const form1 = document.querySelector('#form1');

form1.addEventListener("submit", function(event){
    event.preventDefault();
    const fd = new FormData(form1);

    let order = {}
    let cart = [];

    for (const key of fd.keys()){
        if(fd.get(key).toString().length > 0){
            order[key] = fd.get(key).toString();
        }
    }
    if(confirm("This pizza will be added to your cart")){
        cart.push(order);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});