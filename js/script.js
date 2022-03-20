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
    if(confirm("Your order has been added to your cart")){
        cart.push(order);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});

const btnViewOrder = document.querySelector("#view-order");
btnViewOrder.addEventListener('click', function(){
    let cart - JSON.parse(localStorage.getItem("cart"));
    cart.forEach(element => {
        document.querySelector("#our-order").innerHTML += '<tr>
        <td>${element['Size']}</td>
        <td>${element['Crust']}</td>
        <td>${element['Quantity']}</td>
        <td>${element['Price']}</td>
        </tr>';

    });
    let tot = cart.reduce((sum, item) => sum + (item['price'] || 0), 0);
    document.querySelector("#total").innerHTML = "Total" +tot.toString();
    console.log(localStorage.getItem("cart"));
})