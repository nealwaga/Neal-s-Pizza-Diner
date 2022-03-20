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

    for (const key of fd.keys()) {
        if(fd.get(key).toString().length > 0){
            order[key] = fd.get(key).toString();
        }
    }
    if(confirm("Your order has been added to the cart")){
        cart.push(order);
        localStorage.setItem("cart", JSON.stringify(cart));
        
        console.log(cart);
    }
});


function myFunction(){
    let text;
    if (confirm("Would you like us to deliver your order to your place of choice? Cost of transport will be Ksh 200") == true) {
        text = "Your order will be delivered to your location.";
    }   else {
        text = "Okay";
    }
    document.getElementById("demo").innerHTML = text;
}