let cartIcon = document.querySelector("cart-icon")
let card = document.querySelector(".card")
let cancel = document.querySelector("#close")


cartIcon.onclick = () =>{
    card.classList.add("active");   
};
cartIcon.onclick = () =>{
    card.classList.remove("active");   
};

if(document.readyState == 'loading'){
    document.addEventListener( 'DOMContentLoaded',ready)
}else{
    ready();
}
function ready()
{
    var removeCartButtons = document.getElementsByClassName('cancel')
    console.log(removeCartButtons)
    for(var i=0;i<removeCartButtons.length;i++){
        var button = removeCartButtons[i]
        button.addEventListener('click' ,removeCartItem)
    }
}
function removeCartItem(event)
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}